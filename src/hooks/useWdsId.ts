import { useId } from '@reach/auto-id'

const useWdgsId = (id?: string) => {
  const autoId = useId()
  return id ? id : `wds-${autoId}`
}

export default useWdgsId;
