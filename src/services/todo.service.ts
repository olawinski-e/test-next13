import { ITodo } from '../types/types'

/* READ ALL TODOS */
export async function getTodoList(): Promise<ITodo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await res.json()
  return todos
}

/* READ ONE TODO */
export async function getOneTodoItem(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const todo = await res.json()
  return todo
}

/* CREATE */
export async function createTodoItem(data: FormData) {
  const title = data.get('title')

  console.log(data)

  if (typeof title !== 'string') {
    console.log('Titre non valide')
  }

  await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

/* UPDATE */
export async function updateTodoItem(id: number, completed: boolean) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      completed
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const todos = await res.json()
  return todos
}

/* DELETE */
export async function deleteTodoItem(id: number) {
  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE'
  })
}
