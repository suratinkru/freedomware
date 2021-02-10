<template>
<div></div>

  
</template>


<script>

export default {

  data() {
    return {
      isActive: true,
      data:''
    };
  },
  mounted() {
//    console.log(localStorage.getItem("access_token"));
//      axios({
//       method: "get",
//       url: "http://localhost:4000/api/admin/profile",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("access_token"),
//       },
//     })
//       .then((response) => {
//         this.data = response.data.data
//         console.log(this.data.uuid);
//       })
//       .catch((error) => {
 
//         console.log(error.response.data);
//         if(error.response.data == 'Unauthorized'){
//           localStorage.removeItem("access_token");
//         }
        
//       });
  },
  methods: {
    
   
 
  },
  computed: {},
};
</script>
<style></style>