import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const Home = () => {
  const shots = [
    {
      id: '1',
      name: 'Vial 1B',
      dose: '0.05 ml',
      date: '4 March 2025 · 10:00 AM',
    },
    {
      id: '2',
      name: 'Vial 1B',
      dose: '0.25 ml',
      date: '24 March 2025 · 10:00 AM',
    },
    {
      id: '3',
      name: 'Vial 1A',
      dose: '0.28 ml',
      date: '24 April 2025 · 10:00 AM',
    },
  ];
  // Define a state to track the active tab
  const [activeTab, setActiveTab] = React.useState('Home');
  return (
    <View>
      <ScrollView>
        <View
          style={{
            borderBlockColor: 'black',
            backgroundColor: '#0A59D6',
            width: '100%',
            height: 149,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            position: 'absolute',
          }}
        >
          <Image
            source={require('../assets/image/Ellipse.png')}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: 180,
              resizeMode: 'contain',
              width: 200,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Image
              source={require('../assets/image/logo2.png')}
              style={{
                height: 30,
                resizeMode: 'contain',
                width: 30,
              }}
            />

            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Montserrat',
              }}
            >
              Home
            </Text>
            <Image
              source={require('../assets/image/bell.png')}
              style={{
                height: 20,
                resizeMode: 'contain',
                width: 20,
                color: activeTab === 'Home' ? '#3DCAAA' : '#000',
              }}
            />
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            paddingTop: 80,
          }}
        >
          <View style={{ width: 289 }}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                color: 'white',
                fontWeight: '700',
                fontSize: 26,
                letterSpacing: 0.5,
              }}
            >
              Welcome, John Doe
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat',
                color: 'white',
                fontWeight: '400',
                fontSize: 14,
                letterSpacing: 0.5,
                lineHeight: 14,
                paddingTop: 3,
              }}
            >
              4 march 2025 . 10:00 AM
            </Text>
          </View>
          <Image
            source={require('../assets/image/user.png')}
            style={{
              height: 50,

              width: 50,
            }}
          />
        </View>

        {/* Percentage Image */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Image
            source={require('../assets/image/percentage.png')}
            style={{
              width: 88,
              height: 85,
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: '#25131a',
                fontWeight: '600',
                fontSize: 15,
                fontFamily: 'Montserrat',
                paddingBottom: 8,
              }}
            >
              Compliance Overview
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontFamily: 'Montserrat',
                letterSpacing: 0.5,
                lineHeight: 19,
              }}
            >
              You have been 75% compliant
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontFamily: 'Montserrat',
                letterSpacing: 0.5,
                lineHeight: 19,
                paddingBottom: 5,
              }}
            >
              with your treatment schedules
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontFamily: 'Montserrat',
                letterSpacing: 0.5,
                fontWeight: '500',
                lineHeight: 19,
              }}
            >
              Your goal is 80% by end of month
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../assets/image/box1.png')}
            style={{
              width: '100%',
              height: 112,
              resizeMode: 'contain',
              marginTop: 20,
              position: 'absolute',
            }}
          />
          <View
            style={{
              marginTop: 10,
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../assets/image/line2.png')}
              style={{
                width: 90,
                top: -60,
                right: 20,
                height: 198,
                resizeMode: 'contain',
                marginTop: 20,
                position: 'absolute',
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                marginTop: 20,
              }}
            >
              <Image
                source={require('../assets/image/inju.png')}
                style={{
                  width: 50,
                  height: 50,
                }}
              />

              <View>
                <Text
                  style={{
                    fontFamily: 'Montserrat',
                    color: '#25131a',
                    fontWeight: '600',
                    fontSize: 15,
                    paddingBottom: 8,
                  }}
                >
                  Next Appointment in
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    fontSize: 13,
                  }}
                >
                  <Image
                    source={require('../assets/image/gps.png')}
                    style={{
                      width: 10,
                      height: 10,
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Montserrat',
                      fontWeight: '400',
                      fontSize: 13,
                      color: '#000',
                    }}
                  >
                    Uptown Allergy Center
                  </Text>
                </View>
              </View>
              <Image
                source={require('../assets/image/day.png')}
                style={{
                  width: 85,
                  height: 33,
                  marginTop: 10,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: -40,
                alignSelf: 'center',
                width: '60%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#25A083',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  borderRightColor: '#CCCCCC',
                  paddingRight: 16,
                }}
              >
                <Image
                  source={require('../assets/image/calander.png')}
                  style={{
                    width: 10,
                    height: 10,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    fontFamily: 'Montserrat',
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}
                >
                  Monday, 26 July
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 16,
                }}
              >
                <Image
                  source={require('../assets/image/time.png')}
                  style={{
                    width: 10,
                    height: 10,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    fontFamily: 'Montserrat',
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}
                >
                  01:25 PM
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Shots List */}
        <View style={{ padding: 30, position: 'static', width: '100%' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 35,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontStyle: 'semi-bold',
                fontWeight: '600',
                fontFamily: 'Montserrat',
                lineHeight: '100%',
              }}
            >
              Recent Shots
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{}}>See All</Text>
              <Image
                source={require('../assets/image/Vector.png')}
                style={{
                  width: 10,
                  height: 10,
                  marginLeft: 5,
                }}
              />
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 30, paddingBottom: 40 }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
              padding: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            {[
              {
                vial: 'Vial 1B',
                dose: '0.05 ml',
                date: '4 March 2025 · 10:00 AM',
              },
              {
                vial: 'Vial 1B',
                dose: '0.25 ml',
                date: '24 March 2025 · 10:00 AM',
              },
              {
                vial: 'Vial 1A',
                dose: '0.28 ml',
                date: '24 April 2025 · 10:00 AM',
              },
            ].map((item, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomColor: '#E0E0E0',
                  borderBottomWidth: idx === 2 ? 0 : 1,
                  borderRadius: 10,
                  padding: 15,
                  marginTop: idx === 0 ? 0 : 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: 'Montserrat',
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#25131a',
                    }}
                  >
                    {item.vial}{' '}
                    <Text style={{ fontWeight: '400' }}>· {item.dose}</Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 4,
                    }}
                  >
                    <Image
                      source={require('../assets/image/calander-2.png')}
                      style={{
                        width: 12,
                        height: 12,
                        marginRight: 5,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: 12,
                        color: '#777',
                      }}
                    >
                      {item.date}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/image/dose.png')}
                    style={{ width: 42, height: 42 }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Image
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginTop: 20,
              position: 'absolute',
              bottom: -120,
              left: 0,
            }}
            source={require('../assets/image/Hero.png')}
          />
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          paddingVertical: 20,
          paddingBottom: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 8,
        }}
      >
        {/* Home Tab */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setActiveTab('Home')}>
            <Text
              style={{
                fontSize: ms(12),
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: activeTab === 'Home' ? '#3DCAAA' : '#000',
              }}
            >
              Home
            </Text>
          </TouchableOpacity>
          {activeTab === 'Home' && (
            <View style={{ width: 20, height: 2, backgroundColor: '#3DCAAA', marginTop: 4, borderRadius: 1 }} />
          )}
        </View>
        {/* Shots Tab */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setActiveTab('Shots')}>
            <Text
              style={{
                fontSize: ms(12),
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: activeTab === 'Shots' ? '#3DCAAA' : '#000',
              }}
            >
              Shots
            </Text>
          </TouchableOpacity>
          {activeTab === 'Shots' && (
            <View style={{ width: 20, height: 2, backgroundColor: '#3DCAAA', marginTop: 4, borderRadius: 1 }} />
          )}
        </View>
        {/* Reactions Tab */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setActiveTab('Reactions')}>
            <Text
              style={{
                fontSize: ms(12),
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: activeTab === 'Reactions' ? '#3DCAAA' : '#000',
              }}
            >
              Reactions
            </Text>
          </TouchableOpacity>
          {activeTab === 'Reactions' && (
            <View style={{ width: 20, height: 2, backgroundColor: '#3DCAAA', marginTop: 4, borderRadius: 1 }} />
          )}
        </View>
        {/* Report A Reaction Tab */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setActiveTab('Report')}>
            <Text
              style={{
                fontSize: ms(12),
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: activeTab === 'Report' ? '#3DCAAA' : '#000',
              }}
            >
              Report A Reaction
            </Text>
          </TouchableOpacity>
          {activeTab === 'Report' && (
            <View style={{ width: 20, height: 2, backgroundColor: '#3DCAAA', marginTop: 4, borderRadius: 1 }} />
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    borderBlockColor: 'black',
    backgroundColor: '#0A59D6',
    width: '100%',
    height: vs(149),
    borderBottomLeftRadius: ms(35),
    borderBottomRightRadius: ms(35),
    position: 'absolute',
  },
  headerEllipse: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: vs(180),
    resizeMode: 'contain',
    width: s(200),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(20),
    marginTop: vs(20),
  },
  headerLogo: {
    height: vs(30),
    resizeMode: 'contain',
    width: s(30),
  },
  headerTitle: {
    color: 'white',
    fontSize: ms(18),
    fontFamily: 'Montserrat',
  },
  headerBell: {
    height: vs(20),
    resizeMode: 'contain',
    width: s(20),
  },
  welcomeRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(20),
    paddingTop: vs(80),
  },
  welcomeTextContainer: {
    width: s(289),
  },
  welcomeTitle: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontWeight: '700',
    fontSize: ms(26),
    letterSpacing: 0.5,
  },
  welcomeSubtext: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontWeight: '400',
    fontSize: ms(14),
    letterSpacing: 0.5,
    lineHeight: vs(14),
    paddingTop: vs(3),
  },
  welcomeAvatar: {
    height: vs(50),
    width: s(50),
  },
  percentageRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: ms(15),
    borderRadius: ms(10),
    alignItems: 'center',
    marginHorizontal: s(20),
    marginTop: vs(20),
  },
  percentageImage: {
    width: s(88),
    height: vs(85),
  },
  percentageTextContainer: {
    marginLeft: ms(15),
  },
  complianceTitle: {
    color: '#25131a',
    fontWeight: '600',
    fontSize: ms(15),
    fontFamily: 'Montserrat',
    paddingBottom: vs(8),
  },
  complianceText: {
    color: '#000',
    fontSize: ms(13),
    fontFamily: 'Montserrat',
    letterSpacing: 0.5,
    lineHeight: vs(19),
  },
  complianceGoal: {
    color: '#000',
    fontSize: ms(13),
    fontFamily: 'Montserrat',
    letterSpacing: 0.5,
    fontWeight: '500',
    lineHeight: vs(19),
  },
  box1Image: {
    width: '100%',
    height: vs(112),
    resizeMode: 'contain',
    marginTop: vs(20),
    position: 'absolute',
  },
  box1Inner: {
    marginTop: vs(10),
    paddingHorizontal: s(10),
    justifyContent: 'center',
  },
  line2Image: {
    width: s(90),
    top: -60,
    right: 20,
    height: vs(198),
    resizeMode: 'contain',
    marginTop: vs(20),
    position: 'absolute',
  },
  appointmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(20),
    marginTop: vs(20),
  },
  injuImage: {
    width: s(50),
    height: vs(50),
  },
  nextAppointmentText: {
    fontFamily: 'Montserrat',
    color: '#25131a',
    fontWeight: '600',
    fontSize: ms(15),
    paddingBottom: vs(8),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: ms(13),
  },
  gpsImage: {
    width: s(10),
    height: vs(10),
    marginRight: s(5),
  },
  locationText: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: ms(13),
    color: '#000',
  },
  dayImage: {
    width: s(85),
    height: vs(33),
    marginTop: vs(10),
  },
  appointmentDetails: {
    position: 'absolute',
    bottom: -40,
    alignSelf: 'center',
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: ms(10),
    backgroundColor: '#25A083',
    borderRadius: ms(5),
  },
  appointmentCol: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#CCCCCC',
    paddingRight: ms(16),
  },
  calanderImage: {
    width: s(10),
    height: vs(10),
  },
  appointmentColText: {
    color: 'white',
    fontSize: ms(12),
    fontFamily: 'Montserrat',
    fontWeight: '500',
    paddingLeft: ms(5),
  },
  appointmentColRight: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: ms(16),
  },
  timeImage: {
    width: s(10),
    height: vs(10),
  },
  shotsListContainer: {
    padding: ms(30),
    position: 'static',
    width: '100%',
  },
  shotsListHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: vs(35),
  },
  shotsListTitle: {
    fontSize: ms(15),
    fontStyle: 'semi-bold',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    lineHeight: '100%',
  },
  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {},
  seeAllImage: {
    width: s(10),
    height: vs(10),
    marginLeft: s(5),
  },
  shotsList: {
    paddingHorizontal: ms(30),
    paddingBottom: vs(40),
  },
  shotsListCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: ms(12),
    padding: ms(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E0E0E0',
    borderRadius: ms(10),
    padding: ms(15),
    marginTop: 0,
  },
  shotRowWithBorder: {
    borderBottomWidth: 1,
  },
  shotRowNoBorder: {
    borderBottomWidth: 0,
  },
  shotVialText: {
    fontFamily: 'Montserrat',
    fontSize: ms(14),
    fontWeight: '600',
    color: '#25131a',
  },
  shotDoseText: {
    fontWeight: '400',
  },
  shotDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vs(4),
  },
  calander2Image: {
    width: s(12),
    height: vs(12),
    marginRight: s(5),
  },
  shotDateText: {
    fontFamily: 'Montserrat',
    fontSize: ms(12),
    color: '#777',
  },
  doseImage: {
    width: s(42),
    height: vs(42),
  },
  heroImage: {
    width: '100%',
    height: vs(200),
    resizeMode: 'contain',
    marginTop: vs(20),
    position: 'absolute',
    bottom: -120,
    left: 0,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: vs(20),
    paddingBottom: vs(20),
    borderTopLeftRadius: ms(20),
    borderTopRightRadius: ms(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
  },
  bottomNavTab: {
    alignItems: 'center',
  },
  bottomNavTabText: {
    fontSize: ms(12),
    fontFamily: 'Montserrat',
    fontWeight: '500',
  },
  bottomNavIndicator: {
    width: s(20),
    height: vs(2),
    backgroundColor: '#3DCAAA',
    marginTop: vs(4),
    borderRadius: ms(1),
  },
});
