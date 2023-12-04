import './style.css';
import {Client, Databases, ID} from "appwrite";
const but = document.getElementById('but')
const input = document.getElementById('input')


but.addEventListener('click', () => {
  alert('your dates are send succefully')
  const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('656e0a7edb2e928772b1')

  const databases = new Databases(client)

  const promise = databases.createDocument(
    '656e0a9482efac8479bc',
    '656e0a9f354ef2b5a49d',
    ID.unique(),
    { "title": input.value }
  );

  promise.then(function (response) {
    console.log(response);
  }, function (error) {
    console.log(error);
  });
})
