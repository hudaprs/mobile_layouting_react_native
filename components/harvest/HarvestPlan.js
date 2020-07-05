import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import RadioForm from 'react-native-simple-radio-button';

// Global Styles
import {globalStyles} from '../../styles/global';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HarvestPlan = () => {
  const radioRefOne = useRef(null);
  const radioRefTwo = useRef(null);
  const radioRefThree = useRef(null);
  const [initial, setInitial] = useState(0);
  const [radioValue, setRadioValue] = useState('');

  return (
    <View style={globalStyles.container}>
      {/* Title */}
      <Text style={styles.harvestPlanText}>
        Kamu harus menentukan rencana sesuai dengan item di bawah ini
      </Text>

      <View style={globalStyles.mt2} />

      {/* Boxes */}
      <View style={styles.harvestPlanBox}>
        <View style={styles.harvestPlanBoxBody}>
          <View style={styles.harvestPlanRadioInput}>
            <TouchableOpacity
              onPress={() => {
                radioRefOne.current.updateIsActiveIndex(0);
                radioRefTwo.current.updateIsActiveIndex(-1);
                radioRefThree.current.updateIsActiveIndex(-1);
              }}>
              <RadioForm
                ref={radioRefOne}
                radio_props={[{value: 'LokasiPanen'}]}
                initial={-1}
                onPress={value => {
                  setRadioValue(value);
                }}
                buttonSize={16}
                buttonOuterSize={32}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.harvestPlanTitle}>Lokasi Panen</Text>
            <Text style={styles.harvestPlanSubTitle}>
              Pilih lokasi di mana panen akan dilakukan
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.harvestPlanBox}>
        <View style={styles.harvestPlanBoxBody}>
          <View style={styles.harvestPlanRadioInput}>
            <TouchableOpacity
              onPress={() => {
                radioRefOne.current.updateIsActiveIndex(-1);
                radioRefTwo.current.updateIsActiveIndex(0);
                radioRefThree.current.updateIsActiveIndex(-1);
              }}>
              <RadioForm
                ref={radioRefTwo}
                radio_props={[{value: 'MandorPemanen'}]}
                initial={-1}
                onPress={value => {
                  setRadioValue(value);
                }}
                buttonSize={16}
                buttonOuterSize={32}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.harvestPlanTitle}>Mandor & Pemanen</Text>
            <Text style={styles.harvestPlanSubTitle}>
              Menentukan mandor dan pemanen
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.harvestPlanBox}>
        <View style={styles.harvestPlanBoxBody}>
          <View style={styles.harvestPlanRadioInput}>
            <TouchableOpacity
              onPress={() => {
                radioRefOne.current.updateIsActiveIndex(-1);
                radioRefTwo.current.updateIsActiveIndex(-1);
                radioRefThree.current.updateIsActiveIndex(0);
              }}>
              <RadioForm
                ref={radioRefThree}
                radio_props={[{value: 'AngkongMekanis'}]}
                initial={-1}
                onPress={value => {
                  setRadioValue(value);
                }}
                buttonSize={16}
                buttonOuterSize={32}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.harvestPlanTitle}>Angkong Mekanis</Text>
            <Text style={styles.harvestPlanSubTitle}>
              Menentukan kendaraan dan operator
            </Text>
          </View>
        </View>
      </View>

      <View style={globalStyles.mt4} />

      <TouchableOpacity style={globalStyles.btn}>
        <Text style={globalStyles.btnText}>Selesai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  harvestPlanText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#233258',
  },
  harvestPlanBox: {
    backgroundColor: 'rgba(130, 156, 208, 0.07999999821186066)',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  harvestPlanBoxBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  harvestPlanRadioInput: {
    marginRight: 10,
  },
  harvestPlanTitle: {
    color: '#407BFF',
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
  },
  harvestPlanSubTitle: {
    color: '#3F3F3F',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
});

export default HarvestPlan;
