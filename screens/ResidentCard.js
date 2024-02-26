import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import useFetch from '../hooks/useFetch'

const ResidentCard = ({ url }) => {

    const [resident, getResident, hasError, isLoading] = useFetch(url)

    React.useEffect(() => {
        getResident()
    }, [])

    return (
        <View style={styles.residents}>
            {
                isLoading
                    ? <Text style={styles.residents}>Loading</Text>
                    : (
                        <View>
                            <Text style={styles.residents}>{resident?.name}</Text>
                            <Text style={styles.residents}>{resident?.name}</Text>
                            <Text style={styles.residents}>{resident?.name}</Text>
                            <Text style={styles.residents}>{resident?.name}</Text>
                        </View>
                    )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    residents: {
        flex: 1,
        backgroundColor: '#B9F9EE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    residents: {
        backgroundColor: '#1C7062',
    },
});

export default ResidentCard