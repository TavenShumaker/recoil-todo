import React from 'react';
import {
  useRecoilValue,
  useRecoilSnapshot,
} from 'recoil';

const ConsoleLogs = () => {

  // const snapshot = useRecoilSnapshot();
  // const nodes = snapshot.getNodes_UNSTABLE();
  // //an array of RecoilState and RecoilValueReadOnly objects
  // const nodesArr = Array.from(nodes);
  // const loadable = snapshot.getLoadable(nodeArr[0]);
  // const values0 = useRecoilValue(nodesArr[0]);
  // const values1 = useRecoilValue(nodesArr[1]);

  // const logs = () => {
  //   // const nodes = snapshot.getNodes_UNSTABLE();
  //   // const nodesArr = nodes.toArray();
  //   console.log(loadable.contents);
  //   console.log(nodes);
  //   console.log(nodesArr);
  //   console.log(values1);
  // };

  return (
    <button>Log Info to the Console</button>
  );
};

export default ConsoleLogs;