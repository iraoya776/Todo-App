 {/* <Image source={require("./assets/icon.png")} style={{width: "100%", height: 300}} /> */}
 <Image source={{ uri: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} style={{width: "100%", height: 380}} />
 {/* <StatusBar style="auto" /> */}
 <ImageBackground source={{ uri: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} style={styles.bg} borderRadius = {20}>
   <Text style= {{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Welcome to my cooking Class </Text>
   <TextInput
     placeholder='Enter your name'
     style={{ borderWidth: 1, padding: 10, borderRadius: 10, fontSize: 16 }}
     placeholderTextColor={"white"}
   />
 </ImageBackground>