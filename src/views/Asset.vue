<template>
    <lay-card shadow="never" class="container-asset">
        <template v-slot:title>
            List Asset
        </template>
        <template v-slot:body>
            <div class="box-control">
                <lay-button class="btn-primary btn-add" @click="$router.push('/asset/add')">+ Add Asset</lay-button>
                <lay-input class="input-search" v-model="searchValue" type="text" placeholder="Search Asset..."></lay-input>
            </div> 
            <lay-table :columns="columnsTable" :data-source="vehicleData" even>
                <template v-slot:assetName="{ row }">
                    <span class="asset-black">
                        {{ row.assetName }}
                    </span>
                </template>                
                <template #description="{ row }">
                    <div class="asset-black">
                        {{ row.description }}
                    </div>
                </template>
                <template v-slot:purchaseCost="{ data }">
                    <b class="asset-black">
                        {{ numberWithCommas(data.purchaseCost) }}
                    </b>                    
                </template>
                <template v-slot:purchaseDate="{ data }">
                    {{ formattedDate(data.purchaseDate) }}
                </template>
                <template v-slot:status="{ data }">
                    <div class="status-clip" :class="{active: data.status === 'Active', repair: data.status === 'in Repair', inactive: data.status === 'Inactive' }">
                        {{ data.status }}
                    </div>                    
                </template>
            </lay-table>          
        </template>
  </lay-card>
</template>
<script>
import { mapState } from 'vuex';
import moment from 'moment';

export default {
    data(){
        return{
            searchValue: '',
            vehicleData:[],
            columnsTable : [
            {
                title:"Asset ID/Tag",
                width:"150px",
                key:"assetID"
            },
            {
                title:"Asset Name",
                //width:"200px",
                key:"assetName",
                customSlot: "assetName",
            },{
                title:"Description",
                width: "20%",
                key:"description",
                customSlot:"description"
            },
            {
                title:"Purchase Cost",
                // width: "100px",
                key:"purchaseCost",
                customSlot:"purchaseCost"
            },
            {
                title:"Purchase Date",
                // width: "180px",
                key:"purchaseDate",
                customSlot:"purchaseDate"
            },{
                title:"Status",
                // width: "400px",
                key:"status",
                customSlot:"status",
                // ellipsisTooltip: true,
            }],            
        }
    },
    computed:{
        ...mapState({
            tableData: state => state.tableData,          
        }),
    },
    watch:{
        searchValue(newVal){
            this.filterData(newVal);
        }
    },
    methods:{        
        filterData(terms){
        this.vehicleData = this.tableData
            .filter(item => {
            const name = item.assetName.toLowerCase();
            const desc = item.description.toLowerCase();
            const stat = item.status.toLowerCase();

            return terms ? name.includes(terms.toLowerCase()) || desc.includes(terms.toLowerCase()) || stat.includes(terms.toLowerCase())  : true
            })        
        },
        numberWithCommas(x) {
            return `Rp ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        },
        formattedDate(date) {
            return moment(date).format('DD MMM YYYY');
        }
    },
    mounted(){
        this.vehicleData = this.tableData;
    }
}
</script>

<style lang="scss">
.container-asset{
    .box-control{
        display: flex;
        align-items: center;
        gap: 24px;
        margin-bottom: 24px;
    }
    .btn-add{
        min-width: 156px;
        min-height: 38px;
    }
    .input-search{
        color: #7E7E7E;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        border-radius: 8px;
        border: 1px solid #EAECF0;
        width: 233px;
        min-height: 40px;
    }
    .layui-table-view{
        margin: 0 -22px;
    }
    .layui-table td, .layui-table th, .layui-table-col-set, .layui-table-fixed-r, .layui-table-grid-down, .layui-table-header, .layui-table-page, .layui-table-tips-main, .layui-table-tool, .layui-table-total, .layui-table-view, .layui-table[lay-skin=line], .layui-table[lay-skin=row] {    
        border-left-width: 0px !important;
        border-right-width: 0px !important;
    }
    .layui-table thead tr, .layui-table-header .layui-table-cell{
        background-color: #F9FAFB !important;
    }
    .layui-table th{
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;      
        padding: 12px 24px;  
    }
    .layui-table td{
        padding: 16px 24px;
    }
    .layui-table td, .layui-table th{
        color: #475467;
    }
    .layui-table-view .layui-table th {
        border-top: 1px solid #eee;
    }
    .asset-black{
        color: #101828;
    }
    .status-clip{
        display: flex;
        padding: 2px 8px;
        align-items: center;
        font-size: 12px;
        mix-blend-mode: multiply;
        border-radius: 16px;
        &.active{
            color:  #027A48;
            background: #ECFDF3;            
        }
        &.inactive{
            color: #B23842;
            background:  #FEEBEE;
        }
        &.repair{
            color: #B54708;
            background: #FFFAEB;
        }
    }
}
</style>
  