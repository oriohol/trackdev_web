import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import {FormStyles} from '../native/styles/nativeStyles';

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            pwd:'',
            correu:'',
            tipus:3,
            codiUdg:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props);
        /*
            let token = paramToken;
            this.props.userRegisterRequest(token).then(
                ()=>{},
                (data)=>this.setState({errors:data})
            );

        */
    }

    onChange(key, value) {
        this.setState(Object.assign(
            {},
            this.state,
            { [key]: value }))
    }

    onSubmit(e){
        e.preventDefault();
        this.props.userRegisterRequest(this.state).then(
            ()=>{},
            (data)=>this.setState({errors:data})
        );
        console.log(this.state);
    }

    render(){
        let codiUdgForm = null;
        if (this.state.tipus == 3){
            codiUdgForm = <View style={FormStyles.inputGroup}>
                <Text style={FormStyles.title}>Codi Udg</Text>
                <TextInput
                    style={FormStyles.input}
                    value={this.state.codiUdg}
                    onChangeText={(text) => this.onChange('codiUdg', text)}
                />
            </View>
        }
        return(
            <View style={FormStyles.mainDiv}>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Correu</Text>
                    <TextInput
                        style={FormStyles.input}
                        value={this.state.correu}
                        disabled
                    />

                </View>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Username</Text>
                    <TextInput
                        style={FormStyles.input}
                        value={this.state.username}
                        onChangeText={(text) => this.onChange('username', text)}
                    />
                </View>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Password</Text>
                    <TextInput
                        style={FormStyles.input}
                        value={this.state.pwd}
                        onChangeText={(text) => this.onChange('pwd', text)}
                        secureTextEntry={true}
                    />
               
                </View>
                {codiUdgForm}
                 <Button onPress={this.onSubmit} title="Registrar">
                 </Button>
            </View>
        );
        
    }
}

RegisterForm.propTypes = {
    userRegisterRequest: PropTypes.func.isRequired
}


export default RegisterForm;