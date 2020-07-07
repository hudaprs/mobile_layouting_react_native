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
      <Text style={[globalStyles.textSecondary, {opacity: 0.5}]}>
        Kamu harus menentukan rencana sesuai dengan item di bawah ini
      </Text>

      <View style={globalStyles.mt2} />

      {/* Boxes */}
      <View style={globalStyles.boxPrimary}>
        <View style={globalStyles.boxBody}>
          <View style={globalStyles.boxRadioInput}>
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
                buttonSize={8}
                buttonOuterSize={16}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={globalStyles.boxTitle}>Lokasi Panen</Text>
            <Text style={globalStyles.boxSubTitle}>
              Pilih lokasi di mana panen akan dilakukan
            </Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.boxPrimary}>
        <View style={globalStyles.boxBody}>
          <View style={globalStyles.boxRadioInput}>
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
                buttonSize={8}
                buttonOuterSize={16}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={globalStyles.boxTitle}>Mandor & Pemanen</Text>
            <Text style={globalStyles.boxSubTitle}>
              Menentukan mandor dan pemanen
            </Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.boxPrimary}>
        <View style={globalStyles.boxBody}>
          <View style={globalStyles.boxRadioInput}>
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
                buttonSize={9}
                buttonOuterSize={18}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={globalStyles.boxTitle}>Angkong Mekanis</Text>
            <Text style={globalStyles.boxSubTitle}>
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

export default HarvestPlan;
