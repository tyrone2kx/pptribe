import React, { useRef } from 'react'
import PaystackWebView from 'react-native-paystack-webview';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native'
import { WebView } from "react-native-webview";
import { useTheme } from '@react-navigation/native'
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader';



const { height, width } = Dimensions.get('window');


const PaymentScreen = (props) => {


    const childRef = useRef();
    const { colors } = useTheme();
    const { navigation } = props;

    const fullName = 'Tyrone Stevens';
    const email = 'tyrone.onyebuagu@gmail.com';
    const totalAmount = 5000;
    const publicKey = 'pk_test_048217f6e9c63c09355c8392bd3d4d0081174ee7'
    const secretKey = 'sk_test_ce3461f514faa6b1f04ae22747d412afb9d28cbb';
    const phoneNo = '08188889999';
    const paymentRef = (new Date()).getTime();




    const onReceiveResponse = (data) => {
        if (data.event === 'cancelled') {
            // editPaymentRef(); 
            console.log('Payment was closed.');
            navigation.goBack();
        }
        else if (data.event === 'success') {
            console.log(data.transactionRef);
            // verifyReference(transactionRef);
        }
    }



    const html = `   
      <!DOCTYPE html>
      <html lang="en">
              <head>
                      <meta charset="UTF-8">
                      <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <!-- Latest compiled and minified CSS -->
                      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                      <!-- Fonts -->
                      <link rel="dns-prefetch" href="//fonts.gstatic.com">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
                      <title>SUBSCRIPTION</title>
              </head>
              <body onload="payWithPaystack()" style="background-color:#fff;height:100vh ">
                      <script src="https://js.paystack.co/v1/inline.js"></script>
                      <script>
                      
                      </script>
                      <script type="text/javascript">
                              window.onload = payWithPaystack();
                              function payWithPaystack(){
                              var handler = PaystackPop.setup({ 
                                key: '${publicKey}',
                                email: '${email}',
                                amount: ${totalAmount * 100}, 
                                currency: 'NGN',
                                ref: ${paymentRef}, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                                metadata: {
                                custom_fields: [
                                        {
                                        display_name:  'Fullname',
                                        variable_name:  '${fullName}',
                                        value:'${fullName}'
                                        },
                                        {
                                            display_name:  'Phone Number',
                                            variable_name:  '${phoneNo}',
                                            value:'${phoneNo}'
                                            },
                                ]
                                },
                                callback: function(response){
                                      var resp = {event:'successful', transactionRef:response.reference};
                                       window.ReactNativeWebView.postMessage(JSON.stringify(resp))
                                },
                                onClose: function(){
                                   var resp = {event:'cancelled'};
                                   window.ReactNativeWebView.postMessage(JSON.stringify(resp))
                                }
                                });
                                handler.openIframe();
                                }
                      </script> 
              </body>
      </html> 
      `;


    return (
        <>
            <View>
                <Header alt />
            </View>
            <ScrollView contentContainerStyle={{ backgroundColor: colors.primaryBackground, minHeight: height }}>

                {/* <WebView
                    originWhitelist={['*']}
                    source={{ html }}
                    style={{ height, width, padding: 0, margin: 0, backgroundColor: colors.primaryBackground }}
                    onMessage={(e) => {
                        let receivedData = JSON.parse(e.nativeEvent.data)
                        onReceiveResponse(receivedData)
                    }}
                /> */}

                <View style={{ ...styles.pageContainer, backgroundColor: colors.primaryBackground, paddingTop: 20, minHeight: '80%', alignItems: 'center' }}>

                    <View style={{ ...styles.formContainer, backgroundColor: colors.primaryContainerColor }}>

                        <View style={{ padding: 20, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <SectionHeader title='Support PPTribe' />
                        </View>


                        <View style={{ width: '100%', paddingVertical: 10, justifyContent: 'center' }}>
                            <TextInput
                                placeholder='Fullname'
                                placeholderTextColor={colors.secondaryTextColor}
                                style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                            />



                            <TextInput
                                placeholder='Phone Number'
                                keyboardType='decimal-pad'
                                placeholderTextColor={colors.secondaryTextColor}
                                style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                            />

                            <TextInput
                                placeholder='Email'
                                keyboardType='email-address'
                                placeholderTextColor={colors.secondaryTextColor}
                                style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                            />

                            <TextInput
                                placeholder='Amount'
                                keyboardType='decimal-pad'
                                placeholderTextColor={colors.secondaryTextColor}
                                style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                            />


                            <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, backgroundColor: colors.blue, }} onPress={()=> childRef.current.StartTransaction()}>
                                <Text style={{ color: '#FFF' }}>PROCEED</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>

                <PaystackWebView
                    showPayButton={false}
                    paystackKey={publicKey}
                    amount={totalAmount}
                    billingEmail={email}
                    billingMobile={phoneNo}
                    billingName={fullName}
                    refNumber={paymentRef}
                    ActivityIndicatorColor={colors.green}
                    SafeAreaViewContainer={{ backgroundColor: colors.primaryBackground }}
                    SafeAreaViewContainerModal={{ backgroundColor: colors.primaryBackground }}
                    onCancel={(e) => { console.log('cancel') }}
                    onSuccess={(e) => { Alert.alert('Thanks for your contribution.') }}
                    ref={childRef}
                // autoStart={true}
                />


            </ScrollView>
        </>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    pageContainer: {
        width,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    formContainer: {
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    textInput: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    button: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    genderInput: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 20
    },
})
