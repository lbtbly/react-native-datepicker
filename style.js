import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
  dateTouch: {
    width: 142,
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  dateTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateIcon: {
    width: 32,
    height: 32,
    marginLeft: 5,
    marginRight: 5
  },
  dateInput: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  placeholderText: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    fontSize: 16,
    color: '#ff8800'
  },
  btnTextCancel: {
    color: '#666'
  },
  btnCancel: {
    left: 0
  },
  btnConfirm: {
    right: 0
  },
  datePicker: {
    marginTop: 42,
  },
  disabled: {
    backgroundColor: '#eee'
  }
});

export default style;
