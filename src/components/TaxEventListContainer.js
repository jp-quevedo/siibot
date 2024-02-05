import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native'

import UpdateTaxEventModal from './UpdateTaxEventModal'
import TaxEventCard from './TaxEventCard'

const TaxEventListContainer = ({
    taxEventList,
    onHandleModal,

    modalVisible,
    taxEventSelected,
    deleteTaxEvent,
    saveUpdateTaxEvent,
    updatePaidStatus,
    onHandleUpdateName,
    onHandleUpdateAmount
}) => {
    return (
        <View style={styles.taxEventListContainer}>
            <FlatList
            data={taxEventList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TaxEventCard
                    item={item}
                    onHandleModal={onHandleModal}
                    updatePaidStatus={updatePaidStatus}
                />
            )}
            />
            <UpdateTaxEventModal 
                modalVisible={modalVisible}
                taxEventSelected={taxEventSelected}
                deleteTaxEvent={deleteTaxEvent}
                onHandleModal={onHandleModal}
                saveUpdateTaxEvent={saveUpdateTaxEvent}
                onHandleUpdateName={onHandleUpdateName}
                onHandleUpdateAmount={onHandleUpdateAmount}
            />
        </View>
    )
}

export default TaxEventListContainer

const styles = StyleSheet.create({

    taxEventListContainer: {
        flex: 9,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: 20,
        width: '95%'
    },

})