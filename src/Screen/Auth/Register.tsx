import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Icon from "react-native-vector-icons/FontAwesome"; // You can choose other icon libraries as well
  import { useDispatch, useSelector } from "react-redux";
import Seccuss from "../../Components/Seccuss";
  import { handleRegister, setLoading, setUser } from "../../redux/Slice/UserSlice";
  import createApi from "../../Api/Api";
  
  const Register = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [Cpassword, setCPassword] = useState("");
    const [password, setPassword] = useState("");
    const [fullNameF, setFullNameF] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [cpasswordFocused, setCPasswordFocused] = useState(false);
    const dispatch = useDispatch();
  
    const handleEmailFocus = () => {
      setEmailFocused(true);
      setPasswordFocused(false);
      setCPasswordFocused(false);
      setFullNameF(false);
    };
  
    const handlePasswordFocus = () => {
      setPasswordFocused(true);
      setEmailFocused(false);
      setCPasswordFocused(false);
      setFullNameF(false);
    };
    const handleCPasswordFocus = () => {
      setCPasswordFocused(true);
      setEmailFocused(false);
      setPasswordFocused(false);
      setFullNameF(false);
    };

    const handleFullnameFocus = () => {
      setFullNameF(true);
      setEmailFocused(false);
      setPasswordFocused(false);
      setCPasswordFocused(false);
    }
  
    const onLogin = async () => {
      // Check if both email and password are filled
      console.log("email:", email);
      console.log("password :", password);
      
      
      if (!email || !password) {
        alert("Please fill in both email and password fields");
        return;
      }
      
  
      try {
        dispatch(setLoading(true));
        const api = await createApi();
        const response = await api.post('/auth/', {
            email,
            password,
        });
        console.log(response.data.message ,JSON.stringify(response.data , null , 2));
        navigation.navigate('Application')
        dispatch(setUser(response.data));
      } catch (error) {
        console.log("failed to login", error);
      }
    };
  
    
    
  
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#000" />

       
        <View style={styles.header}>
          <Text style={styles.title}>
            create<Text style={styles.blackText}> new account ! 👋</Text>
          </Text>
          <Text style={styles.subTitle}>register to continue</Text>
        </View>
        <View style={styles.form}>
        <View
            style={[
              styles.inputContainer,
              { borderColor: fullNameF ? "#06f" : "#ccc" },
              { backgroundColor: fullNameF ? "#fff" : "#F1ECE9" },
            ]}
          >
            <Icon
              name="user"
              size={20}
              color={fullNameF ? "#06f" : "#999"}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Fullname"
              // keyboardType="Fullname"
              onFocus={handleFullnameFocus}
              value={fullname}
              onChangeText={(text) => setFullname(text.toLowerCase())}
            />
          </View>
          {/* Email Input */}
          <View
            style={[
              styles.inputContainer,
              { borderColor: emailFocused ? "#06f" : "#ccc" },
              { backgroundColor: emailFocused ? "#fff" : "#F1ECE9" },
            ]}
          >
            <Icon
              name="envelope"
              size={20}
              color={emailFocused ? "#06f" : "#999"}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onFocus={handleEmailFocus}
              value={email}
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />
          </View>
          
  
          {/* Password Input */}
          <View
            style={[
              styles.inputContainer,
              { borderColor: passwordFocused ? "#06f" : "#ccc" },
              { backgroundColor: passwordFocused ? "#fff" : "#F1ECE9" },
            ]}
          >
            <Icon
              name="lock"
              size={20}
              color={passwordFocused ? "#06f" : "#999"}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onFocus={handlePasswordFocus}
              value={password}
              onChangeText={(text) => setPassword(text.toLowerCase())}
  
            />
          </View>
          
          <View
            style={[
              styles.inputContainer,
              { borderColor: cpasswordFocused ? "#06f" : "#ccc" },
              { backgroundColor: cpasswordFocused ? "#fff" : "#F1ECE9" },
            ]}
          >
            <Icon
              name="lock"
              size={20}
              color={cpasswordFocused ? "#06f" : "#999"}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder=" confirm Password"
              secureTextEntry
              onFocus={handleCPasswordFocus}
              value={Cpassword}
              onChangeText={(text) => setCPassword(text.toLowerCase())}
  
            />
          </View>
          
        </View>
        {/* Register Button */}
  
        <View style={styles.down}>
          <TouchableOpacity

            style={{
              backgroundColor: "#06f",
              padding: 13,
              borderRadius: 8,
              marginTop: 30,
            }}
            onPress={() => navigation.navigate('Application')}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
          <View style={styles.registerBtn}>
            <Text style={{ color: "#6A6A6A", fontWeight: "500", fontSize: 13 }}>
              {" "}
              I have already
            </Text>
            <TouchableOpacity >
              <Text
                style={{
                  color: "#0066FF",
                  fontWeight: "500",
                  textDecorationLine: "underline",
                }}
              > account ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default Register;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 50,
      paddingLeft: 30,
      paddingRight: 30,
      position: "relative",
    },
    header: {
      marginTop: 106,
      display: "flex",
      flexDirection: "column",
      width: "94%",
    },
    title: {
      fontSize: 34,
      fontWeight: "bold",
      color: "#06f",
    },
    blackText: {
      color: "#000",
    },
    subTitle: {
      color: "#6A6A6A",
      fontSize: 16,
      fontWeight: "400",
      marginTop: 7,
    },
    form: {
      marginTop: 122,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingLeft: 8,
    },
    icon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      height: 50,
    },
    forgetBtn: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      fontSize: 16,
      fontWeight: "400",
      marginTop: 7,
    },
    down: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 150,
    },
    registerBtn: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      fontSize: 16,
      fontWeight: "400",
      marginTop: 22,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  