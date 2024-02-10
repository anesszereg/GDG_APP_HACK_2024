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
import { setLoading, setUser } from "../../redux/Slice/UserSlice";
import createApi from "../../Api/Api";
  // import { handleLogin, setLoading, setUser } from "../../redux/Slice/UserSlice";
  // import createApi from "../../Api/api";
  
  const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const dispatch = useDispatch();
  
    const handleEmailFocus = () => {
      setEmailFocused(true);
      setPasswordFocused(false);
    };
  
    const handlePasswordFocus = () => {
      setPasswordFocused(true);
      setEmailFocused(false);
    };
  
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
        const response = await api.post('sign-in/', {
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
            Happy<Text style={styles.blackText}> de vous revoir ! 👋</Text>
          </Text>
          <Text style={styles.subTitle}>Login to your account to continue</Text>
        </View>
        <View style={styles.form}>
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
          {/* Forgot password */}
          <View style={styles.forgetBtn}>
            <Text style={{ color: "#6A6A6A", fontWeight: "500", fontSize: 13 }}>
              {" "}
              Forget Password ?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#0066FF",
                  fontWeight: "500",
                  textDecorationLine: "underline",
                }}
              >
                {" "}
                Reset{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Login Button */}
  
        <View style={styles.down}>
          <TouchableOpacity
            onPress={onLogin}
            style={{
              backgroundColor: "#06f",
              padding: 13,
              borderRadius: 8,
              marginTop: 30,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View style={styles.registerBtn}>
            <Text style={{ color: "#6A6A6A", fontWeight: "500", fontSize: 13 }}>
              {" "}
              You don’t have an account ?
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
              <Text
                style={{
                  color: "#0066FF",
                  fontWeight: "500",
                  textDecorationLine: "underline",
                }}
              >
                {" "}
                Register here{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 50,
      paddingLeft: 30,
      paddingRight: 30,
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
  