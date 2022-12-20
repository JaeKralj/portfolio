import Form from '../../components/Admin/Form'
import FormCtxProvider from '../../contexts/form-ctx'

export default function Admin() {
  return (
    <div>
      <FormCtxProvider>
        <Form />
      </FormCtxProvider>
    </div>
  )
}
