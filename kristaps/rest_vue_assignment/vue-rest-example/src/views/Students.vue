<template>
    <div>
        <div v-if="list">
            
            <!-- I just wanted to try to make a component -->
            <page-navigation-buttons
                v-if="meta.links"
                :linkFirst="meta.links.first"
                :linkPrev="meta.links.prev"
                :linkNext="meta.links.next"
                :linkLast="meta.links.last"
                v-on:navigation="navigate"
            ></page-navigation-buttons>

            <div>
                <p 
                v-for="item in list" 
                :key="`list-item-${item.id}`" 
                @click="selectStudent(item.id, meta)"
                >{{item.first_name}} {{item.last_name}}</p>
                
            </div>
        </div>
        <div v-else-if="entry">
            <h2>{{entry.first_name}} {{entry.last_name}}</h2>
            <p>{{entry.gender}}</p>
            <p>{{entry.email}}</p>
            <button @click="returnToStudentList(meta)">Return</button>
        </div>

        <div v-else-if="status==404">
            <p>This student doesn't exist</p>
            <button @click="reloadStudents">Students List</button>
        </div>

    </div>
    
</template>

<script>
import PageNavigationButtons from '../components/PageNavigationButtons.vue'

export default {
  components: { PageNavigationButtons },
    data() {
        return {
            list: undefined,
            entry: undefined,
            meta: undefined,
            status: undefined
        }
    },
    methods: {
        navigate(link) {
            // console.log(link)
            this.doRequest(link)
        },
        selectStudent(id, meta) {
            this.$router.replace(`/students/${id}`)
            this.doRequest(meta.single_entry.replace(/:id/, id))    
        },
        returnToStudentList(meta){
            this.$router.replace(`/students`)
            this.doRequest(meta.list_entries)
        },
        reloadStudents(){
            this.$router.push(`/students`)
            this.loadFreshList()
        },
        loadFreshList(){
            this.doRequest('http://localhost:3000/api/students-management/students')
        },
        doRequest(url, method = 'GET') {
            console.log(url)
            fetch(url, {
                method
            })
            .then((response) => {
                // console.log(response.headers.get('content-total-length'))
                this.status = response.status
                // console.log(this.status)
                return response.json();
            })
            .then((response) => {
                const {data, meta} = response
                this.meta = meta;
                if(Array.isArray(data)) {
                    this.list = data
                    this.entry = undefined
                }
                else {
                    this.entry = data
                    this.list = undefined
                }
            })
        }
    },
    mounted() {
        if(this.$route.params.id && this.status!=404){           
            this.doRequest(`http://localhost:3000/api/students-management/students/${this.$route.params.id}`)
        }
        else{
            this.loadFreshList()
        }
    }
}
</script>