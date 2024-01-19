<template>
    <div class="container-app">
        <div class="side-menu">
            <img class="logo-dashboard" alt="" src="/img/app/logo-dashboard.png">
            <lay-menu v-model:selected-key="selectedKey" theme="light" :tree="true">
                <router-link to="/">
                    <lay-menu-item id="1" class="item-side-menu" >                        
                        <Home/>
                        Home                        
                    </lay-menu-item>
                </router-link>
                <router-link to="/asset">
                    <lay-menu-item id="2" class="item-side-menu">                                            
                        <ManageAsset/>
                        Manage Asset                        
                    </lay-menu-item>
                </router-link>
                <router-link to="/setting">
                    <lay-menu-item id="3" class="item-side-menu">                        
                        <Setting/>
                        Settings                        
                    </lay-menu-item>
                </router-link>
            </lay-menu>
        </div>
        <div class="container-content">
            <div class="header">
                <div class="header-title">
                    {{titleHeader}}
                </div>
                <div class="box-icon">
                    <lay-badge type="dot" >
                        <Notification />
                    </lay-badge>
                    <div class="box-profile">
                        <img alt="" src="/img/app/customer-1-1.png">
                    </div>
                </div>
            </div>
            <div class="box-content-wrap">
                <slot></slot>
            </div>            
        </div>      
    </div>
</template>
  
<script>
import Notification from '../assets/icon/Notification.vue'
import Home from '../assets/icon/Home.vue'
import ManageAsset from '../assets/icon/ManageAsset.vue'
import Setting from '../assets/icon/Setting.vue'
  
export default {
    name: 'Layout-App',
    components: {
        Notification,
        Setting,
        Home,
        ManageAsset
    },
    data (){
        return{
            selectedKey: '2'
        }
    },
    computed:{
        titleHeader(){
            if (this.$route.name === 'Home'){
                return "Homepage"
            } else if (this.$route.name === 'Asset'){
                return 'Manage Asset'
            } else if (this.$route.name === 'Setting'){
                return 'Setting'
            } else if (this.$route.name === 'AddAsset'){
                return 'Add Asset'
            } else{
                return ''
            }
        }
    },
    created(){        
        this.$router.push({ path: '/asset' })
    },
}
</script>

<style lang="scss" >
.container-app{
    max-width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    background: #F2F2F2;

    .side-menu{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        width: 256px;
        padding: 24px 8px;
        border-right: 1px solid rgba(0, 0, 0, 0.12);
        gap: 32px;
        .logo-dashboard{
            width: 149px;
            height: 140px;
            margin: 0 auto;
        }
        .layui-nav-tree{
            width: 100%;
        }
        .layui-nav-tree .layui-this, .layui-nav-item:hover, .layui-nav-tree .layui-this:hover, .layui-nav-tree .layui-this>a:hover, .layui-nav-tree .layui-this>a:focus, .layui-nav-tree .layui-this>a:active, .layui-nav-item:active, .layui-nav-item:focus{
            background: #F5F5F5;
            color: #344054 !important;
        }
        .item-side-menu{
            display: flex;
            gap: 10px;
            color: #344054 !important;
            font-family: Inter !important;
            font-size: 14px !important;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            span{
                display: flex;
                align-items: center;
                gap: 24px;
                svg{
                    width: 24px;
                    height: auto;
                }
            }
        }
        .layui-nav *{
            font-size: 14px !important;
        }
        .layui-nav-tree .layui-this *{
            color: #344054 !important;        
        }
        .layui-nav-tree .layui-nav-item>a{
            display: flex;
        }    
        
    }
    .container-content{
        display: flex;
        flex-direction: column;
        // flex-grow: 1;
        width: calc(100% - 256px);
    }
    .header{    
        padding: 16px 24px;
        display: flex;
        justify-content: space-between;        
        align-items: center;
        background: #FCFCFC;
        box-shadow: 1px 0px 0px 0px #F4F4F4 inset;
        // margin-bottom: 24px;
    }
    .box-icon{
        display: flex;
        gap: 16px;
        align-items: center;
        color: #0000008A;
        cursor: pointer;
        svg{
            width: 24px;
            height: auto;

        }
        .layui-badge .layui-badge-dot{
            right: 5px;
            top: 4px;
        }
    }
    .box-profile{
        border-radius: 50%;
        width: 40px;
        height: 40px;
        position: relative;
        background: #FFBC99;
        overflow: hidden;
        cursor: pointer;
        img{
            width: 41px;
            height: auto;
            position: absolute;
            top: 2px;
            left: 1px;
        }
    }
    .header-title{
        color: rgba(0, 0, 0, 0.56);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 32px */
        letter-spacing: 0.15px;
    }
    .box-content-wrap{
        display: flex;
        padding: 24px;
        width: auto;
    }
}
</style>
  