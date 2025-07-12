import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SHOTS_DATA = [
  {
    id: '1',
    vial: 'Vial 1B',
    dose: '0.05 ml',
    status: 'Confirm',
    confirmed: false,
  },
  {
    id: '2',
    vial: 'Vial 1B',
    dose: '0.05 ml',
    status: 'Confirmed',
    confirmed: true,
  },
  {
    id: '3',
    vial: 'Vial 1B',
    dose: '0.05 ml',
    status: 'Confirm',
    confirmed: false,
  },
  {
    id: '4',
    vial: 'Vial 1B',
    dose: '0.05 ml',
    status: 'Confirmed',
    confirmed: true,
  },
];

export default function Shots() {
  const [tab, setTab] = useState('Upcoming');

  const renderShotItem = ({ item }) => (
    <View style={{ marginHorizontal: 15, marginTop: 8 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '700', color: '#25131a' }}>
          {item.vial} <Text style={{ fontWeight: '400' }}>. {item.dose}</Text>
        </Text>
        <View
          style={[
            {
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderRadius: 4,
            },
            item.confirmed
              ? { backgroundColor: '#27AE60' }
              : { backgroundColor: '#F89B29' },
          ]}
        >
          <Text style={{ color: 'white', fontSize: 12 }}>{item.status}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/image/calander-2.png')}
            style={{ width: 16, height: 16, marginBottom: 4 }}
          />
          <Text style={{ fontSize: 11, color: '#888' }}>Frequency</Text>
          <Text style={{ fontSize: 13, fontWeight: '700', color: '#000' }}>Weekly</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/image/injuction.png')}
            style={{ width: 16, height: 16, marginBottom: 4 }}
          />
          <Text style={{ fontSize: 11, color: '#888' }}>Dosage</Text>
          <Text style={{ fontSize: 13, fontWeight: '700', color: '#000' }}>{item.dose}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/image/blood.png')}
            style={{ width: 16, height: 16, marginBottom: 4 }}
          />
          <Text style={{ fontSize: 11, color: '#888' }}>Bottle</Text>
          <Text style={{ fontSize: 13, fontWeight: '700', color: '#000' }}>M</Text>
        </View>
        <Image
          source={require('../assets/image/user.png')}
          style={{ width: 35, height: 35 }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/image/gps.png')}
            style={{ width: 12, height: 12, marginRight: 5 }}
          />
          <Text style={{ fontSize: 12, color: '#000' }}>Uptown Allergy Center</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/image/calander.png')}
            style={{ width: 12, height: 12, marginRight: 5 }}
          />
          <Text style={{ fontSize: 12, color: '#000' }}>4 march 2025 . 10:00 AM</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView edges={['left', 'right']} style={{ flex: 1, paddingTop: 0, paddingBottom: 0 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ backgroundColor: '#0A59D6', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/image/back.png')}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Shots</Text>
          <Image
            source={require('../assets/image/user.png')}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={{ flex: 1, backgroundColor: '#F5F7F9', padding: 10, borderRadius: 10, fontSize: 14 }}
          />
          <TouchableOpacity style={{ marginLeft: 10, backgroundColor: '#F5F7F9', borderRadius: 10, padding: 10 }}>
            <Image
              source={require('../assets/image/calender2.png')}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10, paddingTop: 10 }}>
          {['Upcoming', 'Missed', 'Completed'].map(item => (
            <TouchableOpacity key={item} onPress={() => setTab(item)}>
              <Text style={{ fontSize: 16, color: tab === item ? '#25131a' : '#999', fontWeight: tab === item ? 'bold' : 'normal' }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 3, backgroundColor: '#F89B29', width: 80, marginLeft: 20, marginTop: 5, borderRadius: 2 }} />

        <View style={{ paddingBottom: 10, paddingTop: 0 }}>
          {SHOTS_DATA.map((item) => (
            <View key={item.id} style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
              {renderShotItem({ item })}
            </View>
          ))}
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, margin: 20, borderRadius: 12, alignItems: 'center' }}>
          <Image
            source={require('../assets/image/user.png')}
            style={{ width: 70, height: 70, borderRadius: 10 }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', marginBottom: 8 }}>Did you have a reactions?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={{ flex: 1, paddingVertical: 8, marginHorizontal: 4, borderRadius: 6, alignItems: 'center', backgroundColor: '#F22424' }}
              >
                <Text style={{ color: 'white', fontSize: 13, fontWeight: '500' }}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flex: 1, paddingVertical: 8, marginHorizontal: 4, borderRadius: 6, alignItems: 'center', backgroundColor: '#F89B29' }}
              >
                <Text style={{ color: 'white', fontSize: 13, fontWeight: '500' }}>Mild</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flex: 1, paddingVertical: 8, marginHorizontal: 4, borderRadius: 6, alignItems: 'center', backgroundColor: '#0063F7' }}
              >
                <Text style={{ color: 'white', fontSize: 13, fontWeight: '500' }}>Severe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
