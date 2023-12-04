<View style={styles.container}>
        {/* <Text style = {styles.header}>Hello React Native</Text> */}
        {/* <Text style={{ fontsize: 20, color: "red" }}>welcome to my ToDo app!</Text> */}
          {/* <Image source={{ uri: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} style={{ width: "100%", height: 380 }} /> */}
          <ImageBackground source={{ uri: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} style={styles.bg} borderRadius={20}>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Create Account</Text>
            <TextInput placeholder='Enter full name'
              placeholderTextColor={"black"}
              style={{ borderWidth: 1, padding: 10, borderRadius: 10, fontSize: 15, marginTop: 30}}
            />
            <TextInput
              placeholder='Enter Username'
              placeholderTextColor={"black"}
              style={{ borderWidth: 1, padding: 10, borderRadius: 10, fontSize: 15, marginTop: 10}} />
            <TextInput placeholder='Enter email address'
              placeholderTextColor={"black"}
              style={{ borderWidth: 1, padding: 10, borderRadius: 10, fontSize: 15, marginTop: 10}}
            />
            <TextInput placeholder='Enter password'
              placeholderTextColor={"black"}
              style={{marginTop: 10, padding: 10, borderRadius: 10, borderWidth: 1, fontSize: 15, marginBottom: 20}}
            />
            <Button title='SIGN UP'
              onPress={() => Alert.alert("Welcome")} />
            <Text style={{ textAlign: "center", marginTop: 20, fontWeight: "bold", marginBottom: 20 }}>Already have an Account?</Text>
            <Button title='LOG IN'
              onPress={() => Alert.alert("Enter email to log in")}
            />
          </ImageBackground>
        </View>