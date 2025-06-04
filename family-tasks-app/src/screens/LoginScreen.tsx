import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import { colors, borderRadius, shadows } from '../theme/colors';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const role = route.params?.role || 'child';

    const handleLogin = () => {
        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Navigate based on role
        if (role === 'parent') {
            navigation.navigate('ParentHome');
        } else {
            navigation.navigate('ChildHome');
        }
    };

    return (
        <View style={styles.container}>
            <Icon 
                name={role === 'parent' ? 'user-tie' : 'child'} 
                size={60} 
                color="#007AFF" 
                style={styles.icon}
            />
            <Text style={styles.title}>
                {role === 'parent' ? 'Parent Login' : 'Child Login'}
            </Text>
            
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            />
            
            <TouchableOpacity 
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.navigate('RoleSelection')}
            >
                <Text style={styles.backButtonText}>Change Role</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    loginButton: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backButton: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#666',
        fontSize: 16,
    },
});

export default LoginScreen;