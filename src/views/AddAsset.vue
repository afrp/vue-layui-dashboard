<template>
    <lay-card shadow="never" class="container-add-asset">
        <template v-slot:title>
            <div class="box-title" @click="$router.go(-1)">
                <Arrow /> Add Asset
            </div>            
        </template>
        <template v-slot:body>
            <div class="box-content">
                <div class="wrap-input-box">
                    <div class="title-content">
                        Asset Information
                    </div>
                    <div class="form-group">
                        <label for="assetIdInput">Asset ID/Tag </label>
                        <lay-input v-model="formData.assetID" id="assetIdInput" placeholder="Please type here"></lay-input>                        
                    </div>
                    <div class="form-group">
                        <label for="assetNameInput">Asset Name </label>
                        <lay-input v-model="formData.assetName" id="assetNameInput" placeholder="Please type here"></lay-input>                        
                    </div>
                    <div class="form-group">
                        <label for="categoryInput">Category </label>
                        <lay-select id="categoryInput" v-model="formData.category" placeholder="Please Select">
                            <lay-select-option value="Vehicle" label="Vehicle"></lay-select-option>
                            <lay-select-option value="Tire" label="Tire"></lay-select-option>                            
                        </lay-select>
                    </div>
                    <div class="form-group">
                        <label for="statusInput">Status</label>
                        <lay-select id="statusInput" v-model="formData.status" placeholder="Please Select">
                            <lay-select-option value="Active" label="Active"></lay-select-option>
                            <lay-select-option value="Inactive" label="Inactive"></lay-select-option>
                            <lay-select-option value="in Repair" label="in Repair"></lay-select-option>                            
                        </lay-select>
                    </div>
                    <div class="form-group">
                        <label for="modelNumberInput">ModelNumber</label>
                        <lay-input v-model="formData.modelNumber" id="modelNumberInput" placeholder="Please type here"></lay-input>                        
                    </div>
                    <div class="form-group">
                        <label for="serialNumberInput">SerialNumber</label>
                        <lay-input v-model="formData.serialNumber" id="serialNumberInput" placeholder="Please type here"></lay-input>                        
                    </div>
                    <div class="form-group">                                                
                        <lay-textarea placeholder="Please type here" id="descriptionInput" v-model="formData.description" show-count :maxlength="200" :rows="1"></lay-textarea>
                        <label for="descriptionInput">Description</label>
                    </div>
                </div>
                <div class="wrap-input-box">
                    <div class="title-content">
                        Purchase Information
                    </div>
                    <div class="form-group input-prefix">
                        <label for="purchaseCostInput">Purchase Cost </label>
                        <lay-input ref="rawNumberInput" @keyup="handleKeyUp" @keydown="handleKeyDown" type="text" v-model="formData.purchaseCost" id="purchaseCostInput" placeholder="Please type here" >
                            <template #prefix>Rp</template>
                        </lay-input>
                    </div>
                    <div class="form-group">
                        <label for="purchaseDateInput">Purchase Date</label>                        
                        <lay-date-picker id="purchaseDateInput" v-model="formData.purchaseDate" placeholder="Please select Date"></lay-date-picker>
                    </div>
                    <div class="form-group">
                        <label for="vendorNameInput">Vendor Name</label>
                        <lay-input v-model="formData.vendorName" id="vendorNameInput" placeholder="Please type here"></lay-input>                        
                    </div>
                </div>
            </div>
            <div class="box-submit">
                <lay-button class="btn-primary btn-submit" @click="submitData" :disabled="disableBtn">Add Asset</lay-button>                
            </div>             
        </template>
  </lay-card>
</template>
<script>
import Arrow from '../assets/icon/Arrow.vue'
import { mapState } from 'vuex';
import { layer } from "@layui/layui-vue";
import moment from 'moment';

export default {
    components:{
        Arrow
    },
    data(){
        return{            
            formData: {
                    assetID: "",
                    assetName: "",
                    category: "",
                    status: "",
                    modelNumber: "",
                    serialNumber: "",
                    description: "",
                    purchaseCost: '',
                    purchaseDate: "",
                    vendorName: ""
                },
            disableBtn: false,          
        }
    },    
    computed:{
        ...mapState({
            tableData: state => state.tableData,          
        }),
    },
    methods:{    
        handleKeyDown(event) {
            //only accept numeric
            const key = event.which;
            if ((key < 48 || key > 57) && key !== 8) {
                event.preventDefault();
            }
        },
        handleKeyUp() {
            let value = this.formData.purchaseCost.replace(/,/g, '');
            this.$data.formData.purchaseCost = parseInt(value);
            let caret = value.length - 1;
            // add comma separator to input
            while ((caret - 3) > -1) {
                caret -= 3;
                value = value.split('');
                value.splice(caret + 1, 0, ",");
                value = value.join('');
            }

            this.$data.formData.purchaseCost = value;            
        },
        submitData(){
            this.disableBtn = true;

            //form validation
            if(
                this.formData.assetID === "" ||
                this.formData.assetName === "" ||
                this.formData.category === "" ||
                this.formData.status === "" ||
                this.formData.modelNumber === "" ||
                this.formData.serialNumber === "" ||
                this.formData.description === "" ||
                this.formData.purchaseCost === '' ||
                this.formData.purchaseDate === "" ||
                this.formData.vendorName === ""
            ) {

                const date = moment(this.formData.purchaseDate);                
                if (!date.isValid()){                    
                    layer.msg("Purchase date is invalid", { icon : 7, time: 4000});
                } else {                    
                    layer.msg("Please input all fill", { icon : 7, time: 4000});
                }
                this.disableBtn = false;
                return;
            }
            
            this.formData.purchaseCost = parseFloat(this.formData.purchaseCost.replace(/,/g, ''));

            //save to vuex
            this.tableData.push(this.formData);           
            this.$store.commit('setTableData', this.tableData)        
            layer.msg("Data has been saved", { icon : 1, time: 2000});
            setTimeout(() => {
                this.$router.push('/asset')
                this.disableBtn = false;
            }, 2000);
            
        }
        
    }
}
</script>

<style lang="scss">
.container-add-asset{
    .box-title{
        display: flex;
        gap: 5px;
        align-items: center;
        color: #0000008A;
        svg{
            width: 24px;
            cursor: pointer;
            height: auto;
        }
    }
    .box-content{
        display: flex;
        padding-left:20px;
        gap: 40px;
        flex-wrap: wrap;        
        width: 100%;
    }
    .wrap-input-box{
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: calc(50% - 25px);
    }
    .title-content{
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }
    .form-group{
        position: relative;
        label{
            color:  rgba(0, 0, 0, 0.60);
            font-feature-settings: 'clig' off, 'liga' off;            
            font-family: Roboto;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 12px; 
            letter-spacing: 0.15px;
            padding: 0 4px;
            background: #fff;
            position: absolute;
            top: -5px;
            left: 14px;
        }
        .layui-input {
            width: 100%;
            height: 54px;
            line-height: 100%;
            border: none;
            border-radius: 4px;
            display: inline-flex;
        }
        .layui-input input, .layui-textarea{            
            height: 54px;
            color:  rgba(0, 0, 0, 0.87);
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            letter-spacing: 0.15px;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.23);
            padding-left: 12px;
            padding-right: 12px;
        }
        .layui-textarea{
            height: 56px !important;
            padding: 16px 12px;
        }
        .layui-select{
            width: 100%
        }
        .layui-input-suffix {        
            top: 50%;
            right: 3px;
            transform: translateY(-50%);
            position: absolute;
        }
        .layui-input-prefix{
            right: unset;
            left: 5px; 
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        #purchaseDateInput{
            .layui-input-prefix{
                display: none;
            }
            .layui-date-picker {
                width: 100%;
                height: max-content;
            }
            .layui-date-picker .layui-input {
                height: auto;                
            }
        }
    }
    .input-prefix{
        input{
            padding-left: 37px !important;
        }
    }
    .box-submit{
        padding: 20px 0 0 20px;
        .btn-submit{
            height: 53px;
            max-width: 256px;
            width: 100%;            
        }
    }
}
</style>
  