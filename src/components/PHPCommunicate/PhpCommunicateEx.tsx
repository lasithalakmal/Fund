import { View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ActivityIndicator, Button, DataTable, Dialog, Portal, Text, TextInput } from 'react-native-paper';

const PhpCommunicateEx = () => {

    const [students, setStudents] = useState([]);
    const [stdName, setStdName] = useState('');
    const [stdAge, setStdAge] = useState('');
    const [dialogMsg, setDialogMsg] = useState('');
    const { width } = useWindowDimensions();

    const [visible, setVisible] = React.useState(false);
    const [saving, setSaving] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    useEffect(() => {
        loadAllStudents();
    }, [])

    function loadAllStudents() {
        axios.get('https://gated-output.000webhostapp.com/StudentDataManager.php?act=get_all').then(t => {
            setStudents(t.data);
        })
    }

    function saveStudent() {
        setSaving(true);
        axios.post('https://gated-output.000webhostapp.com/SaveStudent.php', {
            name: stdName,
            age: stdAge,
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(t => {
            if (t.data == "saved") {
                setDialogMsg("Student data saved!");
            } else {
                setDialogMsg("Error saving " + t.data);
            }
            showDialog();
            setSaving(false);
            loadAllStudents();
            console.log('res');
            console.log(t.data);
        }).catch(function (error) {
            console.log('error');
            console.log(error);
            setDialogMsg("Error saving " + error);
            showDialog();
            setSaving(false);
        });
    }

    return (
        <View>
            {
                (students.length > 0) ?
                    <View>
                        <View>
                            <DataTable style={{ width: width, marginTop: 50, height: 500 }} >
                                <DataTable.Header>
                                    <DataTable.Title sortDirection='descending' >ID</DataTable.Title>
                                    <DataTable.Title >Name</DataTable.Title>
                                    <DataTable.Title numeric>Age</DataTable.Title>
                                </DataTable.Header>
                                {
                                    students.map(st =>
                                        <DataTable.Row key={st.id}>
                                            <DataTable.Cell>{st.id}</DataTable.Cell>
                                            <DataTable.Cell>{st.student_name}</DataTable.Cell>
                                            <DataTable.Cell numeric>{st.age}</DataTable.Cell>
                                        </DataTable.Row>
                                    )
                                }
                            </DataTable>
                        </View>
                        <TextInput style={{ marginTop: 10, marginHorizontal: 20 }}
                            mode='outlined' label="Student name"
                            onChangeText={text => setStdName(text)}
                            theme={{
                                colors: {
                                    background: '#f9f9f9',
                                    primary: '#aaa'
                                },
                                roundness: 40,
                            }}
                        />
                        <TextInput style={{ marginTop: 10, marginHorizontal: 20 }}
                            mode='outlined' label="Age"
                            onChangeText={text => setStdAge(text)}
                            theme={{
                                colors: {
                                    background: '#f9f9f9',
                                    primary: '#aaa'
                                },
                                roundness: 40,
                            }}
                        />
                        <Button loading={saving} onPress={() => saveStudent()} style={{ width: 200, marginTop: 20, alignSelf: 'flex-end', marginRight: 20 }} mode='outlined' compact >Save</Button>
                        <Dlog visible={visible} hideDialog={hideDialog} dMessage={dialogMsg} />
                    </View>
                    : <View style={{ height: '100%', justifyContent: 'center' }}>
                        <ActivityIndicator />
                    </View>
            }
        </View>
    )
}

const Dlog = ({ visible, hideDialog, dMessage }: { visible: boolean, hideDialog: () => void, dMessage: string }) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">{dMessage}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}

export default PhpCommunicateEx