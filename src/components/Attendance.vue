<template>
  <div>
    <h3>Add Attendance</h3>
    <div class="card results__add-result">
      <div>
         <i class="material-icons prefix">person
        <input
          @keypress="search1()"
          v-model="addAttendanceData.reg_id"
          class="validate"
          placeholder="Registraion No"
          id="reg_no"

        ></i>
      </div>
      <div>
        <i class=" material-icons prefix">rate_review
        <input
          v-model="addAttendanceData.sub_id"
          class="validate"
          placeholder="Subject ID"
          id="sub_id"
        ></i>
      </div>
      <div>
        <i class="material-icons prefix">rate_review
        <input
          v-model="addAttendanceData.attendance_percentage"
          class="validate"
          placeholder="Attendance Percentage"
          id="attendance_percentage"
        ></i>
      </div>
      <!-- <div></div> -->
      <div>
        <i
          @click="onAdd(); clear()"
          class="material-icons medium"
        >
          add_circle
        </i>
      </div>
    </div>
    <h1>Attendance</h1>

    <div v-for="element in attendance" v-bind:key="element.reg_id" class="collection">
    <div class="collection-item results__list-item">
      <div >{{element.reg_id}}</div>
      <div >{{element.sub_id}}</div>
      <div >{{element.attendance_percentage}}</div>
      <div>
        <i
          @click="onDelete(element.sub_id,element.reg_id)"
          class="material-icons"
        >
          delete
        </i>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import db from '@/db'

export default {
  name: 'HelloWorld',
  data () {
    return {
      attendance: [],
      addAttendanceData:{
        reg_id:'',
        sub_id:'',
        attendance_percentage:''
      }
    }
  },
  computed:{

  },
  created(){

    this.getAttendance()
    // this.clear()
  },
  methods:{
    getAttendance(){
      db.collection('attendance').get().then(querySnapshot =>{
      const attendance=[]
      querySnapshot.forEach(doc=>{
        // console.log(doc.data())
        attendance.push(doc.data())
      })
      this.attendance=attendance
    } )

    },
    onAdd(){

      db.collection('attendance').doc(this.addAttendanceData.reg_id).set(this.addAttendanceData
      ).then(this.getAttendance())

    },
    onDelete(sub_id,reg_id){
      db.collection('attendance')
        .where('reg_id','==',reg_id)
        .where('sub_id','==',sub_id)
        .get()
        .then(querySnapshot =>{
          querySnapshot.forEach(doc=>{
            doc.ref.delete().then(this.getAttendance)
          })
        })
    },
    clear(){
       $("#reg_no").val('');
       $("#sub_id").val('');
       $("#attendance_percentage").val('')
    },
    search1(){
      // console.log(reg_no);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .results__list-item{
   align-items: center;
   display : flex;
   justify-content: space-between;
 }
 .results__add-result{
   align-items: center;
   display : flex;
   justify-content: space-between;
 }
 .material-icons{
   cursor: pointer;
 }
</style>
