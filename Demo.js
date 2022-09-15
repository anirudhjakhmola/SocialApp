// //import liraries
// import React, {useState} from 'react';
// import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';
// import HomeHeader from '../homeScreen/homeHeader';
// import SearchHeader from '../../../components/SearchHeader';
// import {Card, Title} from 'react-native-paper';
// import Indonesia from '../../../assets/images/Indonesia.png';
// import Menu from 'react-native-vector-icons/Feather';
// import CustomButton from '../../../components/CustomButton';
// // create a component
// const ProfileHome = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexDirection: 'row',
//           paddingLeft: SIZES.hp(1.5),
//           paddingRight: SIZES.hp(1.5),
//           paddingTop: SIZES.hp(2),
//         }}>
//         <Arrow
//           name="arrowleft"
//           size={SIZES.hp(3.5)}
//           color={COLORS.black}
//           onPress={() => navigation.navigate('home')}
//         />
//         <Text
//           style={{
//             color: COLORS.black,
//             ...FONTS.Poppins600,
//             fontSize: SIZES.hp(2),
//           }}>
//           Select country
//         </Text>

//         <Arrow name="arrowleft" size={SIZES.hp(3.5)} color={COLORS.white} />
//       </View>
//       <SearchHeader />
//       <ScrollView>
//         {[1, 1, 1, 1, 1].map(() => {
//           return (
//             <View style={styles.topContainer}>
//               <Card style={styles.cardStyle}>
//                 <View style={styles.viewStyle}>
//                   <Image source={Indonesia} style={styles.imgstyle} />
//                   <Text style={styles.countrystyle}>Indonesia</Text>
//                 </View>
//               </Card>
//             </View>
//           );
//         })}
//       </ScrollView>
//       <View style={{flex: 1, justifyContent: 'flex-end'}}>
//         <CustomButton title="Save" />
//       </View>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     borderRadius: SIZES.hp(1),
//     elevation: 3,
//     padding: SIZES.hp(1),

//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     fontSize: SIZES.hp(1.8),
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//     left: SIZES.hp(3),
//   },
//   imgstyle: {
//     width: SIZES.wp(12),
//     height: SIZES.hp(6),
//     borderRadius: SIZES.hp(12) / 2,
//     backgroundColor: COLORS.white,
//   },
// });

// //make this component available to the app
// export default ProfileHome;

////////////////////////////////////////////////////////////////////

//import liraries
// import React, {useState} from 'react';
// import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';

// import {Card, Title} from 'react-native-paper';
// import Indonesia from '../../../assets/images/Indonesia.png';
// import Menu from 'react-native-vector-icons/Feather';

// import CustomButton from '../../../components/CustomButton';
// import Reload from '../../../assets/icons/Reload.svg';
// import Sports from '../../../assets/icons/Sports.svg';
// // create a component
// const ProfileHome = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexDirection: 'row',
//           paddingLeft: SIZES.hp(1.5),
//           paddingRight: SIZES.hp(1.5),
//           paddingTop: SIZES.hp(2),
//         }}>
//         <Arrow
//           name="arrowleft"
//           size={SIZES.hp(3.5)}
//           color={COLORS.black}
//           onPress={() => navigation.navigate('home')}
//         />
//         <Text
//           style={{
//             color: COLORS.black,
//             ...FONTS.Poppins600,
//             fontSize: SIZES.hp(2),
//           }}>
//           Tab sequence
//         </Text>

//         <Reload width={20} height={20} />
//       </View>

//       <ScrollView style={{marginTop: SIZES.hp(3)}}>
//         {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
//           return (
//             <View style={styles.topContainer}>
//               <Card style={styles.cardStyle}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     left: SIZES.hp(1),
//                     // justifyContent: 'space-around',
//                   }}>
//                   <Sports width={20} height={20} />
//                   <Text style={styles.countrystyle}>Latest news</Text>
//                   <View
//                     style={{
//                       flex: 1,
//                       justifyContent: 'flex-end',
//                       flexDirection: 'row',
//                       right: SIZES.hp(2.5),
//                     }}>
//                     <Menu name="menu" color={COLORS.black} size={22} />
//                   </View>
//                 </View>
//               </Card>
//             </View>
//           );
//         })}
//       </ScrollView>
//       {/* <View style={{flex: 1, justifyContent: 'flex-end'}}>
//         <CustomButton title="Save" />
//       </View> */}
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     borderRadius: SIZES.hp(1),
//     elevation: 3,
//     padding: SIZES.hp(1),

//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     fontSize: SIZES.hp(1.8),
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//     left: SIZES.hp(3),
//   },
//   imgstyle: {
//     width: SIZES.wp(12),
//     height: SIZES.hp(6),
//     borderRadius: SIZES.hp(12) / 2,
//     backgroundColor: COLORS.white,
//   },
// });

// //make this component available to the app
// export default ProfileHome;

/////////////////////////////////////////////////////\\\

// import React, {useState} from 'react';
// import {View, Text, StyleSheet, ScrollView, Image, Switch} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';

// import {Card, Title} from 'react-native-paper';
// import Indonesia from '../../../assets/images/Indonesia.png';
// import Menu from 'react-native-vector-icons/Feather';
// import Light from '../../../assets/icons/Light.svg';
// import Dark from '../../../assets/icons/Dark.svg';
// // create a component
// const ProfileHome = ({navigation}) => {
//   const [location, setLocation] = useState(true);
//   const [location1, setLocation1] = useState(false);
//   const toggle = () => {
//     setLocation(prev => !prev);
//   };
//   const toggle1 = () => {
//     setLocation1(prev => !prev);
//   };
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexDirection: 'row',
//           paddingLeft: SIZES.hp(1.5),
//           paddingRight: SIZES.hp(1.5),
//           paddingTop: SIZES.hp(2),
//         }}>
//         <Arrow
//           name="arrowleft"
//           size={SIZES.hp(3.5)}
//           color={COLORS.black}
//           onPress={() => navigation.navigate('home')}
//         />
//         <Text
//           style={{
//             color: COLORS.black,
//             ...FONTS.Poppins600,
//             fontSize: SIZES.hp(2),
//           }}>
//           Theme Mode
//         </Text>

//         <Arrow
//           name="arrowleft"
//           size={SIZES.hp(3.5)}
//           color={COLORS.white}
//           onPress={() => navigation.navigate('home')}
//         />
//       </View>

//       <ScrollView style={{marginTop: SIZES.hp(3)}}>
//         <View style={styles.topContainer}>
//           <Card style={styles.cardStyle}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 left: SIZES.hp(1),
//                 // justifyContent: 'space-around',
//               }}>
//               <Dark width={20} height={20} />
//               <Text style={styles.countrystyle}>Dark theme</Text>
//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: 'flex-end',
//                   flexDirection: 'row',
//                   right: SIZES.hp(2.5),
//                 }}>
//                 <Switch
//                   trackColor={{true: COLORS.red, false: COLORS.white}}
//                   thumbColor={COLORS.white}
//                   onValueChange={toggle}
//                   value={location}
//                 />
//               </View>
//             </View>
//           </Card>
//           <Card style={styles.cardStyle}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 left: SIZES.hp(1),
//                 // justifyContent: 'space-around',
//               }}>
//               <Light width={20} height={20} />
//               <Text style={styles.countrystyle}>Light theme</Text>
//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: 'flex-end',
//                   flexDirection: 'row',
//                   right: SIZES.hp(2.5),
//                 }}>
//                 <Switch
//                   trackColor={{true: COLORS.red, false: COLORS.white}}
//                   thumbColor={COLORS.white}
//                   onValueChange={toggle1}
//                   value={location1}
//                 />
//               </View>
//             </View>
//           </Card>
//           <Card style={styles.cardStyle}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 left: SIZES.hp(1),
//                 // justifyContent: 'space-around',
//               }}>
//               <Light width={20} height={20} />
//               <Text style={styles.countrystyle}>System Default</Text>
//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: 'flex-end',
//                   flexDirection: 'row',
//                   right: SIZES.hp(2.5),
//                 }}>
//                 <Switch
//                   trackColor={{true: COLORS.red, false: COLORS.white}}
//                   thumbColor={COLORS.white}
//                   // onValueChange={toggle1}
//                   // value={location1}
//                 />
//               </View>
//             </View>
//           </Card>
//           <Card style={styles.cardStyle}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 left: SIZES.hp(1),
//                 // justifyContent: 'space-around',
//               }}>
//               <Light width={20} height={20} />
//               <Text style={styles.countrystyle}>Editor choice</Text>
//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: 'flex-end',
//                   flexDirection: 'row',
//                   right: SIZES.hp(2.5),
//                 }}>
//                 <Switch
//                   trackColor={{true: COLORS.red, false: COLORS.white}}
//                   thumbColor={COLORS.white}
//                   // onValueChange={toggle1}
//                   // value={location1}
//                 />
//               </View>
//             </View>
//           </Card>
//         </View>
//       </ScrollView>
//       {/* <View style={{flex: 1, justifyContent: 'flex-end'}}>
//         <CustomButton title="Save" />
//       </View> */}
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     borderRadius: SIZES.hp(1),
//     elevation: 3,

//     padding: SIZES.hp(2.5),

//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     fontSize: SIZES.hp(1.8),
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//     left: SIZES.hp(3),
//   },
//   imgstyle: {
//     width: SIZES.wp(12),
//     height: SIZES.hp(6),
//     borderRadius: SIZES.hp(12) / 2,
//     backgroundColor: COLORS.white,
//   },
// });

// //make this component available to the app
// export default ProfileHome;

/////////////////////////////////////////////////////////////

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   Switch,
//   TouchableOpacity,
// } from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';
// import {Card, Title} from 'react-native-paper';
// import {Button} from 'react-native-paper';
// import CButton from '../../../components/CButton';
// // create a component
// const ProfileHome = ({navigation}) => {
//   const [FontSize, setFontSize] = useState(SIZES.hp(2));
//   const [primary, setPrimary] = useState('#ffffff');
//   const [primary1, setPrimary1] = useState('#ffffff');
//   const [primary2, setPrimary2] = useState('#ffffff');
//   const [col, setCol] = useState('#393939');
//   const [col1, setCol1] = useState('#393939');
//   const [col2, setCol2] = useState('#393939');
//   const [text, setText] = useState(
//     'Font size of content will be adjusted to by our preferred reading',
//   );

//   const letChangeTextSize = () => {
//     setPrimary1('#ffffff');
//     setPrimary2('#ffffff');
//     setPrimary('#F36D72');
//     setCol('#ffffff');
//     setCol1('#393939');
//     setCol2('#393939');
//     if (FontSize >= SIZES.hp(2)) {
//       setFontSize(SIZES.hp(1.2));
//     }
//   };
//   const letChangeTextSize1 = () => {
//     setPrimary('#ffffff');
//     setPrimary2('#ffffff');
//     setPrimary1('#F36D72');
//     setCol1('#ffffff');
//     setCol('#393939');
//     setCol2('#393939');
//     if (FontSize >= SIZES.hp(1.2)) {
//       setFontSize(SIZES.hp(2));
//     }
//   };
//   const letChangeTextSize2 = () => {
//     setPrimary('#ffffff');
//     setPrimary1('#ffffff');
//     setPrimary2('#F36D72');
//     setCol2('#ffffff');
//     setCol1('#393939');
//     setCol('#393939');
//     if (FontSize <= SIZES.hp(2)) {
//       setFontSize(SIZES.hp(2.5));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexDirection: 'row',
//           paddingLeft: SIZES.hp(1.5),
//           paddingRight: SIZES.hp(1.5),
//           paddingTop: SIZES.hp(2),
//         }}>
//         <Arrow
//           name="arrowleft"
//           size={SIZES.hp(3.5)}
//           color={COLORS.black}
//           onPress={() => navigation.navigate('home')}
//         />

//         <Text
//           style={{
//             color: COLORS.black,
//             ...FONTS.Poppins600,
//             fontSize: SIZES.hp(2),
//           }}>
//           Font size
//         </Text>

//         <Arrow
//           name="arrowleft"
//           size={SIZES.hp(3.5)}
//           color={COLORS.white}
//           onPress={() => navigation.navigate('home')}
//         />
//       </View>

//       <Text
//         style={{
//           left: SIZES.hp(5),
//           color: COLORS.black,
//           ...FONTS.Poppins500,
//           marginBottom: SIZES.hp(2),
//           marginTop: SIZES.hp(2),
//           top: SIZES.hp(5),
//         }}>
//         Preview
//       </Text>
//       <View style={styles.topContainer}>
//         <View style={styles.cardStyle}>
//           <Text style={{fontSize: FontSize, color: COLORS.black}}>{text}</Text>
//         </View>
//       </View>

//       <View
//         style={{
//           justifyContent: 'flex-end',
//           top: SIZES.hp(18),
//           height: SIZES.hp(10),
//         }}>
//         <Text
//           style={{
//             left: SIZES.hp(5),
//             color: COLORS.black,
//             ...FONTS.Poppins500,
//             marginBottom: SIZES.hp(2),
//             marginTop: SIZES.hp(2),
//           }}>
//           Choose text size
//         </Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={{
//             marginTop: SIZES.hp(1),
//             height: SIZES.hp(7),
//             backgroundColor: primary,
//             borderWidth: SIZES.hp(0.1),
//             borderColor: COLORS.primary,
//             marginBottom: SIZES.hp(2),
//             alignItems: 'center',
//             width: SIZES.hp(13),
//             justifyContent: 'center',
//           }}
//           onPress={letChangeTextSize}>
//           <Text
//             style={{
//               color: col,
//               ...FONTS.Poppins500,
//               fontSize: SIZES.hp(1.8),
//             }}>
//             Small
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             marginTop: SIZES.hp(1),
//             height: SIZES.hp(7),
//             backgroundColor: primary1,
//             marginBottom: SIZES.hp(2),
//             borderWidth: SIZES.hp(0.1),
//             borderColor: COLORS.primary,
//             alignItems: 'center',

//             width: SIZES.hp(13),
//             justifyContent: 'center',
//           }}
//           onPress={letChangeTextSize1}>
//           <Text
//             style={{
//               color: col1,
//               ...FONTS.Poppins500,

//               fontSize: SIZES.hp(1.8),
//             }}>
//             Medium
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             marginTop: SIZES.hp(1),
//             height: SIZES.hp(7),
//             backgroundColor: primary2,
//             marginBottom: SIZES.hp(2),
//             borderWidth: SIZES.hp(0.1),
//             borderColor: COLORS.primary,
//             alignItems: 'center',

//             width: SIZES.hp(13),
//             justifyContent: 'center',
//           }}
//           onPress={letChangeTextSize2}>
//           <Text
//             style={{
//               color: col2,
//               ...FONTS.Poppins500,
//               fontSize: SIZES.hp(1.8),
//             }}>
//             Large
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     height: SIZES.hp(15),
//     elevation: 1,
//     top: SIZES.hp(-5),
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//   },
//   btncontainer: {
//     // paddingHorizontal: SIZES.hp(1),
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // height: SIZES.hp(8),
//   },
//   buttonContainer: {
//     flex: 1,
//     top: SIZES.hp(5),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // justifyContent: 'space-around',
//   },
// });

// //make this component available to the app
// export default ProfileHome;

//////////////////////////////////////////////////////////

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   Switch,
//   TouchableOpacity,
//   TextInput,
//   KeyboardAvoidingView,
// } from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';
// import {Picker} from '@react-native-picker/picker';
// import Envelope from 'react-native-vector-icons/SimpleLineIcons';
// import Phone from 'react-native-vector-icons/Feather';
// import CustomButton from '../../../components/CustomButton';
// // create a component
// const ProfileHome = ({navigation}) => {
//   const [len, setLen] = useState('');
//   const [text, onChangeText] = React.useState('');
//   const [number, onChangeNumber] = React.useState(null);

//   return (
//     <KeyboardAvoidingView style={{flex: 1}}>
//       <ScrollView>
//         <View style={styles.container1}>
//           <View
//             style={{
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//               paddingLeft: SIZES.hp(1.5),
//               paddingRight: SIZES.hp(1.5),
//               paddingTop: SIZES.hp(2),
//             }}>
//             <Arrow
//               name="arrowleft"
//               size={SIZES.hp(3.5)}
//               color={COLORS.black}
//               onPress={() => navigation.navigate('home')}
//             />

//             <Text
//               style={{
//                 color: COLORS.black,
//                 ...FONTS.Poppins600,
//                 fontSize: SIZES.hp(2),
//               }}>
//               Feedback
//             </Text>

//             <Arrow
//               name="arrowleft"
//               size={SIZES.hp(3.5)}
//               color={COLORS.white}
//               onPress={() => navigation.navigate('home')}
//             />
//           </View>
//           <View style={styles.container}>
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 flexDirection: 'row',

//                 paddingTop: SIZES.hp(2),
//                 marginBottom: SIZES.hp(1),
//               }}>
//               <Text
//                 style={{
//                   // left: SIZES.hp(5),
//                   color: COLORS.black,
//                   ...FONTS.Poppins500,

//                   marginTop: SIZES.hp(1.8),
//                   // top: SIZES.hp(5),
//                 }}>
//                 Feedback
//               </Text>
//               <Text
//                 style={{
//                   // left: SIZES.hp(5),
//                   color: COLORS.black,
//                   ...FONTS.Poppins500,

//                   marginTop: SIZES.hp(1.8),
//                   // top: SIZES.hp(5),
//                 }}>
//                 {0 + len.length}/500
//               </Text>
//             </View>

//             <TextInput
//               numberOfLines={10}
//               maxLength={500}
//               multiline={true}
//               onChangeText={text => setLen(text)}
//               style={styles.textinputchange}
//               placeholder="Type here"
//               placeholderTextColor="#A3A3A3"
//             />

//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 flexDirection: 'row',

//                 // paddingTop: SIZES.hp(1),
//                 marginBottom: SIZES.hp(1),
//               }}>
//               <Text
//                 style={{
//                   // left: SIZES.hp(5),
//                   color: COLORS.black,
//                   ...FONTS.Poppins500,

//                   marginTop: SIZES.hp(1.8),
//                   // top: SIZES.hp(5),
//                 }}>
//                 Feedback Related To
//               </Text>
//             </View>

//             <PickerComp />
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 flexDirection: 'row',

//                 // paddingTop: SIZES.hp(1),
//                 marginBottom: SIZES.hp(1),
//               }}>
//               <Text
//                 style={{
//                   // left: SIZES.hp(5),
//                   color: COLORS.black,
//                   ...FONTS.Poppins500,

//                   marginTop: SIZES.hp(1.8),
//                   // top: SIZES.hp(5),
//                 }}>
//                 Contact Information
//               </Text>
//             </View>
//             <View style={styles.textinput}>
//               <Envelope
//                 name="envelope"
//                 size={SIZES.hp(2)}
//                 color={COLORS.black}
//                 style={{marginLeft: SIZES.hp(2)}}
//               />
//               <TextInput
//                 placeholder="Email address"
//                 onChangeText={onChangeText}
//                 value={text}
//                 style={{left: SIZES.hp(2)}}
//                 placeholderTextColor="#A3A3A3"
//               />
//             </View>
//             <View style={styles.textinput}>
//               <Phone
//                 name="phone"
//                 size={SIZES.hp(2)}
//                 color={COLORS.black}
//                 style={{marginLeft: SIZES.hp(2)}}
//               />
//               <TextInput
//                 placeholder="Mobile no-"
//                 onChangeText={onChangeNumber}
//                 value={number}
//                 style={{left: SIZES.hp(2)}}
//                 keyboardType="numeric"
//                 placeholderTextColor="#A3A3A3"
//               />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//       <View style={{flex: 1, justifyContent: 'flex-end'}}>
//         <CustomButton title="Save" />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const PickerComp = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   return (
//     <View
//       style={{
//         borderWidth: SIZES.hp(0.1),
//         borderColor: '#EEEEEE',
//         // borderRadius: SIZES.hp(1),
//       }}>
//       <Picker
//         selectedValue={selectedValue}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
//         <Picker.Item
//           label="News"
//           value="one"
//           style={{
//             color: COLORS.black,
//           }}
//         />
//         <Picker.Item
//           label="Trending"
//           value="two"
//           style={{
//             color: COLORS.black,
//           }}
//         />
//         <Picker.Item
//           label="Top"
//           value="three"
//           style={{
//             color: COLORS.black,
//           }}
//         />
//       </Picker>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container1: {
//     flex: 1,
//   },
//   container: {
//     paddingHorizontal: SIZES.hp(4),
//   },
//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     height: SIZES.hp(15),
//     elevation: 1,
//     top: SIZES.hp(-5),
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//   },
//   textinput: {
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: SIZES.hp(1),
//   },
//   btncontainer: {
//     // paddingHorizontal: SIZES.hp(1),
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // height: SIZES.hp(8),
//   },
//   buttonContainer: {
//     flex: 1,
//     top: SIZES.hp(5),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // justifyContent: 'space-around',
//   },
//   textinputchange: {
//     // height: SIZES.hp(15),
//     borderColor: '#EEEEEE',
//     borderWidth: 1,
//     textAlign: 'left',
//     textAlignVertical: 'top',
//     color: COLORS.black,
//   },
// });

// //make this component available to the app
// export default ProfileHome;
/////////////////////////////////////////////////////////////////////////

// import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';

// import Privacy from '../../../assets/icons/Privacy.svg';
// import CustomButton from '../../../components/CustomButton';
// // create a component
// const ProfileHome = ({navigation}) => {
//   return (
//     <>
//       <View style={styles.container1}>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             paddingLeft: SIZES.hp(1.5),
//             paddingRight: SIZES.hp(1.5),
//             paddingTop: SIZES.hp(2),
//           }}>
//           <Arrow
//             name="arrowleft"
//             size={SIZES.hp(3.5)}
//             color={COLORS.black}
//             onPress={() => navigation.navigate('home')}
//           />

//           <Text
//             style={{
//               color: COLORS.black,
//               ...FONTS.Poppins600,
//               fontSize: SIZES.hp(2),
//             }}>
//             Privacy
//           </Text>

//           <Arrow
//             name="arrowleft"
//             size={SIZES.hp(3.5)}
//             color={COLORS.white}
//             onPress={() => navigation.navigate('home')}
//           />
//         </View>
//         <View style={{flex: 1, alignItems: 'center', top: SIZES.hp(4)}}>
//           <Privacy />
//           <Text
//             style={{
//               alignSelf: 'center',
//               color: COLORS.black,
//               ...FONTS.Poppins500,
//               fontSize: SIZES.hp(1.6),
//               top: SIZES.hp(4),
//             }}>
//             Data and privacy
//           </Text>
//           <Text
//             style={{
//               alignSelf: 'center',
//               color: COLORS.black,
//               ...FONTS.Poppins400,
//               fontSize: SIZES.hp(1.6),
//               top: SIZES.hp(4),
//               padding: SIZES.hp(4),
//               textAlign: 'center',
//               lineHeight: SIZES.hp(2.2),
//             }}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. It has survived not
//             only five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s
//             with the release of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software like Aldus
//             PageMaker including versions of Lorem Ipsum. popularised in the
//             1960s with the release of Letraset sheets containing Lorem Ipsum
//             passages, and more recently with desktop publishing software like
//             Aldus PageMaker including versions of Lorem Ipsum.
//           </Text>
//         </View>
//       </View>

//       <View
//         style={{
//           justifyContent: 'flex-end',
//           top: SIZES.hp(-5),
//         }}>
//         <CustomButton title="Continue" />
//         <Text
//           style={{
//             alignSelf: 'center',
//             color: '#515151',
//             ...FONTS.Poppins500,
//             fontSize: SIZES.hp(1.6),
//           }}>
//           Learn More
//         </Text>
//       </View>
//     </>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container1: {
//     flex: 1,
//   },
//   container: {
//     paddingHorizontal: SIZES.hp(4),
//   },
//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     height: SIZES.hp(15),
//     elevation: 1,
//     top: SIZES.hp(-5),
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//   },
//   textinput: {
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: SIZES.hp(1),
//   },
//   btncontainer: {
//     // paddingHorizontal: SIZES.hp(1),
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // height: SIZES.hp(8),
//   },
//   buttonContainer: {
//     flex: 1,
//     top: SIZES.hp(5),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // justifyContent: 'space-around',
//   },
//   textinputchange: {
//     // height: SIZES.hp(15),
//     borderColor: '#EEEEEE',
//     borderWidth: 1,
//     textAlign: 'left',
//     textAlignVertical: 'top',
//     color: COLORS.black,
//   },
// });

// //make this component available to the app
// export default ProfileHome;
////////////////////////////////////////////////////////

// import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';
// import CheckBox from '@react-native-community/checkbox';
// import CustomButton from '../../../components/CustomButton';
// // create a component
// const ProfileHome = ({navigation}) => {
//   const [toggleCheckBox, setToggleCheckBox] = useState(false);
//   return (
//     <>
//       <View style={styles.container1}>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             paddingLeft: SIZES.hp(1.5),
//             paddingRight: SIZES.hp(1.5),
//             paddingTop: SIZES.hp(2),
//           }}>
//           <Arrow
//             name="arrowleft"
//             size={SIZES.hp(3.5)}
//             color={COLORS.black}
//             onPress={() => navigation.navigate('home')}
//           />

//           <Text
//             style={{
//               color: COLORS.black,
//               ...FONTS.Poppins600,
//               fontSize: SIZES.hp(2),
//             }}>
//             Terms and condition
//           </Text>

//           <Arrow
//             name="arrowleft"
//             size={SIZES.hp(3.5)}
//             color={COLORS.white}
//             onPress={() => navigation.navigate('home')}
//           />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             // alignItems: 'center',
//             top: SIZES.hp(4),
//             paddingHorizontal: SIZES.hp(3),
//           }}>
//           <Text
//             style={{
//               // alignSelf: 'flex-start',
//               color: COLORS.black,
//               ...FONTS.Poppins500,
//               fontSize: SIZES.hp(2.2),
//               top: SIZES.hp(4),
//               alignItems: 'flex-start',

//               // right: SIZES.hp(10),
//             }}>
//             Terms and condition
//           </Text>
//           <Text
//             style={{
//               alignSelf: 'center',
//               color: COLORS.black,
//               ...FONTS.Poppins400,
//               fontSize: SIZES.hp(1.6),
//               top: SIZES.hp(5),
//               // padding: SIZES.hp(4),
//               // textAlign: 'center',
//               lineHeight: SIZES.hp(2.6),
//             }}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. It has survived not
//             only five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s
//             with the release of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software like Aldus
//             PageMaker including versions of Lorem Ipsum. popularised in the
//             1960s with the release of Letraset sheets containing Lorem Ipsum
//             passages, and more recently with desktop publishing software like
//             Aldus PageMaker including versions of Lorem Ipsum.
//           </Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             paddingHorizontal: SIZES.hp(2),
//             top: SIZES.hp(-10),
//           }}>
//           <CheckBox
//             disabled={false}
//             value={toggleCheckBox}
//             onValueChange={newValue => setToggleCheckBox(newValue)}
//           />
//           <Text
//             style={{
//               color: COLORS.black,
//               ...FONTS.Poppins500,
//               fontSize: SIZES.hp(1.6),
//               left: SIZES.hp(2),
//             }}>
//             I agree with all the terms and conditions
//           </Text>
//         </View>
//       </View>

//       <View
//         style={{
//           justifyContent: 'flex-end',
//           // top: SIZES.hp(-5),
//         }}>
//         <CustomButton title="Save" />
//       </View>
//     </>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container1: {
//     flex: 1,
//     paddingHorizontal: SIZES.hp(2),
//   },

//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     height: SIZES.hp(15),
//     elevation: 1,
//     top: SIZES.hp(-5),
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//   },
//   textinput: {
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: SIZES.hp(1),
//   },
//   btncontainer: {
//     // paddingHorizontal: SIZES.hp(1),
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // height: SIZES.hp(8),
//   },
//   buttonContainer: {
//     flex: 1,
//     top: SIZES.hp(5),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // justifyContent: 'space-around',
//   },
//   textinputchange: {
//     // height: SIZES.hp(15),
//     borderColor: '#EEEEEE',
//     borderWidth: 1,
//     textAlign: 'left',
//     textAlignVertical: 'top',
//     color: COLORS.black,
//   },
// });

// //make this component available to the app
// export default ProfileHome;
/////////////////////////////////////////////////////////

// import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';
// import CheckBox from '@react-native-community/checkbox';
// import CustomButton from '../../../components/CustomButton';
// import Rate from '../../../assets/icons/Rate.svg';
// import Star from '../../../assets/icons/Star.svg';
// import Starempty from '../../../assets/icons/Starempty.svg';
// // create a component
// const ProfileHome = ({navigation}) => {
//   const [toggleCheckBox, setToggleCheckBox] = useState(false);
//   return (
//     <>
//       <View style={styles.container1}>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             paddingLeft: SIZES.hp(1.5),
//             paddingRight: SIZES.hp(1.5),
//             paddingTop: SIZES.hp(2),
//           }}>
//           <Arrow
//             name="arrowleft"
//             size={SIZES.hp(3.5)}
//             color={COLORS.black}
//             onPress={() => navigation.navigate('home')}
//           />

//           <Text
//             style={{
//               color: COLORS.black,
//               ...FONTS.Poppins600,
//               fontSize: SIZES.hp(2),
//             }}>
//             Rate this app
//           </Text>

//           <Arrow
//             name="arrowleft"
//             size={SIZES.hp(3.5)}
//             color={COLORS.white}
//             onPress={() => navigation.navigate('home')}
//           />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             top: SIZES.hp(8),
//             paddingHorizontal: SIZES.hp(3),
//           }}>
//           <Rate />
//         </View>
//         <View
//           style={{
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             // paddingHorizontal: SIZES.hp(2),
//             top: SIZES.hp(-15),
//           }}>
//           <Text
//             style={{
//               color: COLORS.black,
//               ...FONTS.Poppins500,
//               fontSize: SIZES.hp(2.4),
//             }}>
//             Enjoying this App?
//           </Text>
//           <Text
//             style={{
//               color: '#828282',
//               ...FONTS.Poppins400,
//               fontSize: SIZES.hp(1.6),
//               lineHeight: SIZES.hp(4),
//             }}>
//             Rate your experience using shopback so far.
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               top: SIZES.hp(4),
//             }}>
//             <Star />
//             <Star />
//             <Star />
//             <Star />
//             <Starempty />
//           </View>
//           <Text
//             style={{
//               color: COLORS.primary,
//               ...FONTS.Poppins500,
//               fontSize: SIZES.hp(1.8),
//               top: SIZES.hp(8),
//             }}>
//             Not Now
//           </Text>
//         </View>
//       </View>
//     </>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container1: {
//     flex: 1,
//     paddingHorizontal: SIZES.hp(2),
//   },

//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     height: SIZES.hp(15),
//     elevation: 1,
//     top: SIZES.hp(-5),
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//   },
//   textinput: {
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: SIZES.hp(1),
//   },
//   btncontainer: {
//     // paddingHorizontal: SIZES.hp(1),
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // height: SIZES.hp(8),
//   },
//   buttonContainer: {
//     flex: 1,
//     top: SIZES.hp(5),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // justifyContent: 'space-around',
//   },
//   textinputchange: {
//     // height: SIZES.hp(15),
//     borderColor: '#EEEEEE',
//     borderWidth: 1,
//     textAlign: 'left',
//     textAlignVertical: 'top',
//     color: COLORS.black,
//   },
// });

// //make this component available to the app
// export default ProfileHome;
//////////////////////////////////////////////////////////////\\\

// import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../../constants/theme';
// import Arrow from 'react-native-vector-icons/AntDesign';
// import CustomtextInput from '../../../components/CustomtextInput';
// import FormInput from '../../../components/FormInput';
// import {TextInput, Avatar} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';
// import CustomButton from '../../../components/CustomButton';

// // create a component
// const ProfileHome = ({navigation}) => {
//   return (
//     <>
//       <View style={styles.container1}>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             paddingLeft: SIZES.hp(1.5),
//             paddingRight: SIZES.hp(1.5),
//             paddingTop: SIZES.hp(2),
//             paddingBottom: SIZES.hp(8),
//           }}>
//           <Arrow
//             name="arrowleft"
//             size={SIZES.hp(3.5)}
//             color={COLORS.black}
//             onPress={() => navigation.navigate('home')}
//           />

//           <Text
//             style={{
//               color: COLORS.black,
//               ...FONTS.Poppins600,
//               fontSize: SIZES.hp(2),
//             }}>
//             contact us
//           </Text>

//           <Arrow
//             name="arrowleft"
//             size={SIZES.hp(3.5)}
//             color={COLORS.white}
//             onPress={() => navigation.navigate('home')}
//           />
//         </View>
//         <View style={{paddingHorizontal: SIZES.hp(2)}}>
//           <FormInput
//             label="Full Name"
//             placeholderText="Type here"
//             name="account"
//           />
//           <FormInput label="Email" placeholderText="Type here" name="email" />
//           <FormInput
//             label="Phone-no:"
//             placeholderText="Type here"
//             name="phone"
//             keyboardType="numeric"
//           />
//           <CustomtextInput
//             label="Message"
//             placeholderText="Type here"
//             name="message"
//           />
//         </View>
//       </View>
//       <View
//         style={{
//           justifyContent: 'flex-end',
//         }}>
//         <CustomButton title="Submit" />
//       </View>
//     </>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container1: {
//     flex: 1,
//     paddingHorizontal: SIZES.hp(2),
//     // backgroundColor: 'red',
//   },

//   topContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   cardStyle: {
//     width: SIZES.wp(86),
//     height: SIZES.hp(15),
//     elevation: 1,
//     top: SIZES.hp(-5),
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: COLORS.white,
//     marginBottom: SIZES.hp(1.5),
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//   },
//   viewStyle: {
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//     flexDirection: 'row',
//   },
//   countrystyle: {
//     ...FONTS.Poppins500,
//     color: COLORS.black,
//   },
//   textinput: {
//     borderWidth: SIZES.hp(0.1),
//     borderColor: '#EEEEEE',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: SIZES.hp(1),
//   },
//   btncontainer: {
//     // paddingHorizontal: SIZES.hp(1),
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // height: SIZES.hp(8),
//   },
//   buttonContainer: {
//     flex: 1,
//     top: SIZES.hp(5),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // justifyContent: 'space-around',
//   },
//   textinputchange: {
//     // height: SIZES.hp(15),
//     borderColor: '#EEEEEE',
//     borderWidth: 1,
//     textAlign: 'left',
//     textAlignVertical: 'top',
//     color: COLORS.black,
//   },
// });

// //make this component available to the app
// export default ProfileHome;

///////////////////////////////////////////////////////////////







