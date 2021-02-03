<template>
  <div>
    <h3>Add Results</h3>
    <div class="card results__add-result">
      <div>
         <i class="material-icons prefix">person
        <input 
          @keypress="search1()"
          v-model="addResultData.reg_id"
          class="validate"
          placeholder="Registraion No"
          id="reg_no"
          
        ></i>
      </div>
      <div>
        <i class=" material-icons prefix">rate_review
        <input 
          v-model="addResultData.sub_id"
          class="validate"
          placeholder="Subject ID"
          id="sub_id"
        ></i>
      </div>
      <div>
        <i class="material-icons prefix">rate_review
        <input 
          v-model="addResultData.grade"
          class="validate"
          placeholder="Grade"
          id="grade"
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
    <h1>Results</h1>

    <div v-for="result in results" v-bind:key="result.reg_id" class="collection">
    <div class="collection-item results__list-item">
      <div >{{result.reg_id}}</div>
      <div >{{result.sub_id}}</div>
      <div >{{result.grade}}</div>
      <div>
        <i 
          @click="onDelete(result.sub_id,result.reg_id)"
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
      results: [],
      addResultData:{
        reg_id:'',
        sub_id:'',
        grade:''
      }
    }
  },
  computed:{

  },
  created(){
     
    this.getResults()
    // this.clear()
  },
  methods:{
    getResults(){
      db.collection('results').get().then(querySnapshot =>{
      const results=[]
      querySnapshot.forEach(doc=>{
        // console.log(doc.data())
        results.push(doc.data())
      })
      this.results=results
    } )
    
    },
    onAdd(){
     
      db.collection('results').add(this.addResultData
      ).then(this.getResults())

    },
    onDelete(sub_id,reg_id){
      db.collection('results')
        .where('reg_id','==',reg_id)
        .where('sub_id','==',sub_id)
        .get()
        .then(querySnapshot =>{
          querySnapshot.forEach(doc=>{
            doc.ref.delete().then(this.getResults)
          })
        })
    },
    clear(){
       $("#reg_no").val('');
       $("#sub_id").val('');
       $("#grade").val('')
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
