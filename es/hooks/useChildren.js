import * as React from 'react';
import { Item } from "../Item";
export default function useChildren(list, startIndex, endIndex, scrollWidth, offsetX, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      style: {
        width: scrollWidth
      },
      offsetX: offsetX
    });
    var key = getKey(item);
    return /*#__PURE__*/React.createElement(Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}