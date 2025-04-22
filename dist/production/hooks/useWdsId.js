import { useState } from 'react';

let id = 0;
const useCustomId = () => {
  const [uniqueId] = useState(() => ++id);
  return uniqueId.toString();
};
const useWdgsId = id => {
  const autoId = useCustomId();
  return `wds-${autoId}`;
};

export { useWdgsId as default };
//# sourceMappingURL=useWdsId.js.map
