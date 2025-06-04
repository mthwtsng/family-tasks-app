import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    FlatList, 
    StyleSheet, 
    Modal, 
    Platform 
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Task } from '../types/task';
import Icon from 'react-native-vector-icons/FontAwesome5';

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const TaskManagerScreen: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');
    const [deadline, setDeadline] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleAddOrUpdateTask = () => {
        if (!title || !description || !points) {
            alert('Please fill in all fields');
            return;
        }

        const pointValue = parseInt(points);
        if (isNaN(pointValue) || pointValue <= 0) {
            alert('Please enter a valid number of points');
            return;
        }

        if (editingTask) {
            // Update existing task
            setTasks(tasks.map(task => 
                task.id === editingTask.id 
                    ? { ...task, title, description, points: pointValue, deadline }
                    : task
            ));
        } else {
            // Add new task
            const newTask: Task = {
                id: generateId(),
                title,
                description,
                points: pointValue,
                deadline,
                status: 'available',
            };
            setTasks([...tasks, newTask]);
        }

        clearForm();
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPoints('');
        setDeadline(new Date());
        setEditingTask(null);
        setModalVisible(false);
    };

    const handleEditTask = (task: Task) => {
        setEditingTask(task);
        setTitle(task.title);
        setDescription(task.description);
        setPoints(task.points.toString());
        setDeadline(task.deadline);
        setModalVisible(true);
    };

    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const onDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setDeadline(selectedDate);
        }
    };

    const renderTaskItem = ({ item }: { item: Task }) => (
        <View style={styles.taskItem}>
            <View style={styles.taskContent}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskDescription}>{item.description}</Text>
                <Text style={styles.points}>{item.points} points</Text>
                <Text style={styles.deadline}>
                    Due: {item.deadline.toLocaleDateString()}
                </Text>
            </View>
            <View style={styles.taskActions}>
                <TouchableOpacity 
                    onPress={() => handleEditTask(item)}
                    style={styles.actionButton}
                >
                    <Icon name="edit" size={20} color="#007AFF" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => handleDeleteTask(item.id)}
                    style={styles.actionButton}
                >
                    <Icon name="trash-alt" size={20} color="#FF3B30" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Task Manager</Text>
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Icon name="plus" size={20} color="#FFF" />
                    <Text style={styles.addButtonText}>Add Task</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tasks}
                renderItem={renderTaskItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={() => (
                    <View style={styles.emptyState}>
                        <Icon name="tasks" size={50} color="#CCC" />
                        <Text style={styles.emptyStateText}>No tasks added yet</Text>
                    </View>
                )}
            />

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            {editingTask ? 'Edit Task' : 'Add New Task'}
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Task Title"
                            value={title}
                            onChangeText={setTitle}
                        />
                        <TextInput
                            style={[styles.input, styles.multilineInput]}
                            placeholder="Task Description"
                            value={description}
                            onChangeText={setDescription}
                            multiline
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Points"
                            value={points}
                            onChangeText={setPoints}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity 
                            style={styles.dateButton}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Icon name="calendar-alt" size={20} color="#007AFF" />
                            <Text style={styles.dateButtonText}>
                                Due: {deadline.toLocaleDateString()}
                            </Text>
                        </TouchableOpacity>

                        {showDatePicker && (
                            <DateTimePicker
                                value={deadline}
                                mode="date"
                                display="default"
                                onChange={onDateChange}
                                minimumDate={new Date()}
                            />
                        )}

                        <View style={styles.modalActions}>
                            <TouchableOpacity 
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={clearForm}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.modalButton, styles.saveButton]}
                                onPress={handleAddOrUpdateTask}
                            >
                                <Text style={styles.saveButtonText}>
                                    {editingTask ? 'Update' : 'Add'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        marginLeft: 8,
        fontWeight: '600',
    },
    listContainer: {
        padding: 16,
    },
    taskItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    taskContent: {
        flex: 1,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    taskDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    points: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '600',
    },
    deadline: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    taskActions: {
        justifyContent: 'space-around',
    },
    actionButton: {
        padding: 8,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    emptyStateText: {
        marginTop: 16,
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 16,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#f9f9f9',
    },
    multilineInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 12,
    },
    dateButtonText: {
        marginLeft: 8,
        color: '#007AFF',
        fontSize: 16,
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 8,
    },
    cancelButton: {
        backgroundColor: '#f2f2f2',
    },
    saveButton: {
        backgroundColor: '#007AFF',
    },
    cancelButtonText: {
        color: '#666',
        textAlign: 'center',
        fontWeight: '600',
    },
    saveButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default TaskManagerScreen;