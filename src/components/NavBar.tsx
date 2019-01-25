import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Creators as NavBarActions} from '../store/actions/navBar'


function NavBar(props) {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.button} onPress={props.selectedSearch}>
                <Text>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.selectedAdd}>
                <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.selectedWishlist}>
                <Text>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.selectedSettings}>
                <Text>{props.tela}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'grey',
    },
    button: {
        height: 30,
        marginTop: 10
    }
})

const mapStateToProps = state => ({
    tela:state.navBar.tela
})

const mapDispatchToProps = dispatch => bindActionCreators(NavBarActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

