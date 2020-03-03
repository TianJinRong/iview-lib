<template>
    <div>
        <div class="l-light-table__title">
            <label class="m-component__label">{{inputLabel}}</label>
            <Button shape="circle" class="l-light-table__add" type="primary" @click="handleAdd()" size="small">add</Button>
        </div>
        <Table :columns="columns" :data="data">
            <template
                v-for="(column, columnIndex) in columns"
                slot-scope="{row, index}" :slot="column.slot">
                <Input 
                    :key="column.slot+'-'+columnIndex"
                    v-if="editIndex == index"
                    v-model="row[column.slot]"/>
                <span :key="column.slot+'-'+columnIndex"
                v-else>{{row[column.slot]}}</span>
            </template>
            <template slot-scope="{row, index}" slot="action">
                <div 
                    v-if="editIndex == index">
                    <Button :size="'small'" @click="handleSave(row, index)">Save</Button>
                    <Button :size="'small'" @click="handleCancel()">Cancel</Button>
                </div>
                <div v-else>
                    <Button :size="'small'" @click="handleEdit(row, index)" >Edit</Button>
                    <Button :size="'small'" @click="handleDelete(row, index)" >Delete</Button>
                </div>
            </template>
        </Table>
    </div>
</template>
<script>
export default {
    name: "LightTable",
    props:['inputLabel', 'inputData', 'inputColumns', 'defaultRow'],
    data() {
        return {
            data: [...this.inputData],
            columns: [...this.inputColumns],
            editIndex: -1
        }
    },
    computed: {
        templateColumns() {
            let columns = {...this.inputColumns}
            return columns;
        }
    },
    methods: {
        handleAdd() {
            this.data.push({...this.defaultRow});
            this.editIndex = this.data.length;
        },
        handleSave(row, index) {
            this.data[index] = {...row};
            this.editIndex = -1;
        },
        handleCancel() {
            this.editIndex = -1;
        },
        handleEdit(row, index) {
            window.console.log(row, index);
            this.data[index] = {...row};
            this.editIndex = index;
        },
        handleDelete(index) {
            this.data.splice(index, 1);
        }
    }
}
</script>
<style scoped>
.l-light-table__title {
    display: flex;
    justify-content: space-between;
    margin: 2px 0;
    font-weight: bold;
}
.l-light-table__add {
    
}
</style>