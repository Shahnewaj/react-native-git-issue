import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import BgCard from '../components/BgCard';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const IssueHomeScreen = ({ navigation }) => {

    const [ownerName, setOwnerName] = useState('');
    const [repositoryName, setRepositoryName] = useState('');
    const [ownerNameEmpty, setOwnerNameEmpty] = useState(false);
    const [repositoryNameEmpty, setRepositoryNameEmpty] = useState(false);



    const checkEmptyFields = () => {
        if (ownerName.length === 0) {
            setOwnerNameEmpty(true)
        } else {
            setOwnerNameEmpty(false)
        }

        if (repositoryName.length === 0) {
            setRepositoryNameEmpty(true)
        } else {
            setRepositoryNameEmpty(false)
        }
    }

    const onSummit = () => {
        checkEmptyFields();
        if (ownerName && repositoryName) {
            navigation.navigate('IssueList', { ownerName, repositoryName })
        }
    }

    return (
        <BgCard>
            <Header />
            <CustomInput
                label="Owner"
                placeholder='Owner Name'
                required={true}
                validated={ownerName.length > 2}
                error={ownerNameEmpty}
                onChangeText={(text) => setOwnerName(text)}
                value={ownerName}
            />
            <CustomInput
                label="Repository Name"
                placeholder='Repository Name'
                required={true}
                validated={repositoryName.length > 2}
                error={repositoryNameEmpty}
                onChangeText={(text) => setRepositoryName(text)}
                value={repositoryName}
            />
            <Button
                onPress={() => onSummit()}
                title='Show Issues'
            />
        </BgCard>
    )


}



export default IssueHomeScreen;