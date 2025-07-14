import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
    <View style={styles.shotItemContainer}>
      <View style={styles.shotItemHeader}>
        <Text style={styles.shotItemTitle}>
          {item.vial} <Text style={styles.shotItemDose}>. {item.dose}</Text>
        </Text>
        <View
          style={[
            styles.statusContainer,
            item.confirmed
              ? styles.statusConfirmed
              : styles.statusConfirm,
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.shotItemDetailsRow}>
        <View style={styles.shotItemDetail}>
          <Image
            source={require('../assets/image/calander-2.png')}
            style={styles.shotItemDetailIcon}
          />
          <Text style={styles.shotItemDetailLabel}>Frequency</Text>
          <Text style={styles.shotItemDetailValue}>Weekly</Text>
        </View>
        <View style={styles.shotItemDetail}>
          <Image
            source={require('../assets/image/injuction.png')}
            style={styles.shotItemDetailIcon}
          />
          <Text style={styles.shotItemDetailLabel}>Dosage</Text>
          <Text style={styles.shotItemDetailValue}>{item.dose}</Text>
        </View>
        <View style={styles.shotItemDetail}>
          <Image
            source={require('../assets/image/blood.png')}
            style={styles.shotItemDetailIcon}
          />
          <Text style={styles.shotItemDetailLabel}>Bottle</Text>
          <Text style={styles.shotItemDetailValue}>M</Text>
        </View>
        <Image
          source={require('../assets/image/dose.png')}
          style={styles.shotItemUserIcon}
        />
      </View>

      <View style={styles.shotItemFooter}>
        <View style={styles.shotItemFooterItem}>
          <Image
            source={require('../assets/image/gps.png')}
            style={styles.shotItemFooterIcon}
          />
          <Text style={styles.shotItemFooterText}>Uptown Allergy Center</Text>
        </View>
        <View style={styles.shotItemFooterItem}>
          <Image
            source={require('../assets/image/calander.png')}
            style={styles.shotItemFooterIcon}
          />
          <Text style={styles.shotItemFooterText}>4 march 2025 . 10:00 AM</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('../assets/image/back.png')}
              style={styles.headerBackIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Shots</Text>
          <Image
            source={require('../assets/image/user.png')}
            style={styles.headerUserIcon}
          />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Image
              source={require('../assets/image/calender2.png')}
              style={styles.searchButtonIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          {['Upcoming', 'Missed', 'Completed'].map(item => (
            <TouchableOpacity key={item} onPress={() => setTab(item)}>
              <Text
                style={[
                  styles.tabText,
                  tab === item ? styles.tabTextActive : styles.tabTextInactive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.tabIndicator, 
          tab === 'Upcoming' && { marginLeft: scale(20) }, 
          tab === 'Missed' && { marginLeft: scale(140) }, 
          tab === 'Completed' && { marginLeft: scale(260) }
        ]} />

        <View style={styles.shotsList}>
          {SHOTS_DATA.map(item => (
            <View
              key={item.id}
              style={styles.shotItemWrapper}
            >
              {renderShotItem({ item })}
            </View>
          ))}
        </View>

        <View style={styles.reactionContainer}>
          <Image
            source={require('../assets/image/welcome.png')}
            style={styles.reactionUserIcon}
          />
          <View style={styles.reactionContent}>
            <Text style={styles.reactionTitle}>Did you have a reactions?</Text>
            <View style={styles.reactionButtonsContainer}>
              <TouchableOpacity style={styles.reactionButtonNo}>
                <Text style={styles.reactionButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reactionButtonMild}>
                <Text style={styles.reactionButtonText}>Mild</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reactionButtonSevere}>
                <Text style={styles.reactionButtonText}>Severe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  scrollViewContent: {
    paddingBottom: verticalScale(20),
  },
  header: {
    backgroundColor: '#0A59D6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(10),
  },
  headerBackIcon: {
    width: scale(20),
    height: verticalScale(20),
  },
  headerTitle: {
    color: 'white',
    fontSize: moderateScale(20),
    fontWeight: '600',
  },
  headerUserIcon: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: scale(20),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: scale(10),
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#F5F7F9',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(10),
    borderRadius: scale(10),
    fontSize: moderateScale(14),
  },
  searchButton: {
    marginLeft: scale(10),
    backgroundColor: '#F5F7F9',
    borderRadius: scale(10),
    paddingVertical: verticalScale(10),
  },
  searchButtonIcon: {
    width: scale(20),
    height: verticalScale(20),
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(10),
  },
  tabText: {
    fontSize: moderateScale(16),
  },
  tabTextActive: {
    color: '#25131a',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#999',
    fontWeight: 'normal',
  },
  tabIndicator: {
    height: verticalScale(3),
    backgroundColor: '#F89B29',
    width: scale(80),
    marginTop: verticalScale(5),
    borderRadius: scale(2),
  },
  shotsList: {
    paddingBottom: verticalScale(10),
    paddingTop: 0,
  },
  shotItemWrapper: {
    paddingHorizontal: scale(10),
    marginTop: verticalScale(1),
  },
  shotItemContainer: {
    backgroundColor: 'white',
    borderRadius: scale(10),
    padding: scale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shotItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shotItemTitle: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: '#25131a',
  },
  shotItemDose: {
    fontWeight: '400',
  },
  statusContainer: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(4),
    borderRadius: scale(20),
  },
  statusConfirmed: {
    backgroundColor: '#27AE60',
  },
  statusConfirm: {
    backgroundColor: '#F89B29',
  },
  statusText: {
    color: 'white',
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  shotItemDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  shotItemDetail: {
    alignItems: 'center',
  },
  shotItemDetailIcon: {
    width: scale(16),
    height: verticalScale(16),
    marginBottom: verticalScale(4),
  },
  shotItemDetailLabel: {
    fontSize: moderateScale(11),
    color: '#888',
  },
  shotItemDetailValue: {
    fontSize: moderateScale(13),
    fontWeight: '700',
    color: '#000',
  },
  shotItemUserIcon: {
    width: scale(35),
    height: verticalScale(35),
  },
  shotItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  shotItemFooterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shotItemFooterIcon: {
    width: scale(12),
    height: verticalScale(12),
    marginRight: scale(5),
  },
  shotItemFooterText: {
    fontSize: moderateScale(12),
    color: '#000',
  },
  reactionContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: verticalScale(10),
    margin: scale(20),
    borderRadius: scale(12),
    alignItems: 'center',
  },
  reactionUserIcon: {
    width: scale(70),
    height: verticalScale(70),
    borderRadius: scale(10),
  },
  reactionContent: {
    flex: 1,
    marginLeft: scale(10),
  },
  reactionTitle: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    marginBottom: verticalScale(8),
  },
  reactionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reactionButtonNo: {
    flex: 1,
    paddingVertical: verticalScale(8),
    marginHorizontal: scale(4),
    borderRadius: scale(6),
    alignItems: 'center',
    backgroundColor: '#F22424',
  },
  reactionButtonMild: {
    flex: 1,
    paddingVertical: verticalScale(8),
    marginHorizontal: scale(4),
    borderRadius: scale(6),
    alignItems: 'center',
    backgroundColor: '#F89B29',
  },
  reactionButtonSevere: {
    flex: 1,
    paddingVertical: verticalScale(8),
    marginHorizontal: scale(4),
    borderRadius: scale(6),
    alignItems: 'center',
    backgroundColor: '#0063F7',
  },
  reactionButtonText: {
    color: 'white',
    fontSize: moderateScale(13),
    fontWeight: '500',
  },
});
