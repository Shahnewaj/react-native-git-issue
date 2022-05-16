import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgCard from '../components/BgCard'
import Header from '../components/Header'
import IssueItem from '../components/IssueItem'
import _ from 'lodash'
import Button from '../components/Button'

const IssueListScreen = ({ route, navigation }) => {

    const [issues, setIssues] = useState([]);
    const { ownerName, repositoryName } = route.params
    const [loading, setLoading] = useState(true);


    const fetchIssues = () => {
        setLoading(true)
        fetch(`https://api.github.com/repos/${ownerName}/${repositoryName}/issues`)
            .then(
                (response) => response.json()
            )
            .then(data => {
                console.log(data)
                if (!!data.message) {
                    setIssues([])
                } else {
                    setIssues(data)
                }
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }



    useEffect(() => {
        fetchIssues()
    }, [])


    return (
        <BgCard>
            <Header />
            {loading ?
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <ActivityIndicator size='large' />
                </View>
                :
                <View>
                    {!_.isEmpty(issues) ?
                        <FlatList
                            data={issues}
                            contentContainerStyle={{ paddingBottom: 180 }}
                            renderItem={({ item }) => (
                                <IssueItem
                                    key={item.id}
                                    item={item}
                                />
                            )}
                        />
                        :
                        <View>
                            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>No issues found</Text>
                            <Button
                                title="Search Again"
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    }
                </View>}
        </BgCard>
    )
}

export default IssueListScreen