import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";

const { width, height } = Dimensions.get("window");

const SC = {
  Container: styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #cccccc;
  `,
  SearchEleWrap: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  `,
  SearchWordWrap: styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 5px 12px 10px;
  `,
  SearchWord: styled.Text`
    font-size: ${RFPercentage(2.2)};
    margin-right: 10px;
  `,
};

const SearchEle = (props) => {
  const grayColor = useSelector((state) => state.grayColor);

  return (
    <SC.Container>
      <SC.SearchEleWrap>
        <Text>
          <Ionicons name="ios-search-outline" size={18} color={grayColor} />
        </Text>
        <SC.SearchWordWrap>
          <SC.SearchWord numberOfLines={1}>{props.text}</SC.SearchWord>
        </SC.SearchWordWrap>

        <TouchableOpacity onPress={props.onPress}>
          <Feather name="x" size={15} color={grayColor} />
        </TouchableOpacity>
      </SC.SearchEleWrap>
    </SC.Container>
  );
};

export default SearchEle;
