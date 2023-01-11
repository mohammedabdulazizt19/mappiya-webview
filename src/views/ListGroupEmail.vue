<template>
    <div class="mt-5">
        <ul class="list-group">
            <li class="list-group-item" v-for="user in users" v-bind:key="user.email">{{ user.email }}</li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { users: [] };
  },
  name: "ListGroupEmail",
  props: {
    msg: String,
  },
  mounted() {
    let global = this;
    axios
      .get("http://app.mappiya.com/api/users")
      
      .then(function (response) {
        global.users = response.data;
        //console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
  }, 
}
</script>