import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseISBN, chooseAuthor, chooseHardPaper, chooseInInventory, choosePubYear, chooseTitle } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[]
}

const CarForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500)
    } else {
      dispatch(chooseISBN(data.pub_year));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseHardPaper(data.hard_paper));
      dispatch(chooseInInventory(data.in_inventory));
      dispatch(choosePubYear(data.pub_year));
      dispatch(chooseTitle(data.title));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 500)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='author' placeholder="Author" />
        </div>
        <div>
          <label htmlFor="pub_year">Publication Year</label>
          <Input {...register('pub_year')} name='pub_year' placeholder="Publication Year" />
        </div>
        <div>
          <label htmlFor="ISBN">ISBN</label>
          <Input {...register('ISBN')} name='ISBN' placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="hard_paper">Hardback or Paperback</label>
          <Input {...register('hard_paper')} name='hard_paper' placeholder="HardPaper" />
        </div>
        <div>
          <label htmlFor="in_inventory">In Inventory?</label>
          <Input {...register('in_inventory')} name='in_inventory' placeholder="In Inventory" />
        </div>
        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarForm