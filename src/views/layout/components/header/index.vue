<template>
    <Menu mode="horizontal" :theme="theme" class="l-menu">
        <div class="layout-logo"></div>
        <div class="layout-nav">
            <Submenu v-for="(menu, menuIndex) in menus" :key="menuIndex" :name="menuIndex">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{menu.title}}
                </template>
                <MenuGroup v-for="(menuGroup, menuGroupIndex) in menu.menu_groups" :key="menu+'-'+menuGroupIndex"
                    :title="menuGroup.title">
                    <MenuItem v-for="(subMenu, subMenuIndex) in menuGroup.sub_menus"
                        :key="menuIndex+'-'+menuGroupIndex+'_'+subMenuIndex" :to="subMenu.to"
                        :name="menuIndex+'-'+subMenuIndex">
                    <Icon type="ios-keypad"></Icon>
                    {{subMenu.title}}
                    </MenuItem>
                </MenuGroup>
                <MenuItem v-for="(subMenu, subMenuIndex) in menu.sub_menus"
                        :key="menuIndex+'-'+subMenuIndex" :to="subMenu.to"
                        :name="menuIndex+'-'+subMenuIndex">
                    <Icon type="ios-keypad"></Icon>
                    {{subMenu.title}}
                </MenuItem>
            </Submenu>
        </div>
    </Menu>
</template>
<script>
    export default {
        name: 'TheHeader',
        data() {
            return {
                theme: 'light',
                menus: [
                    {
                        title: 'iview',
                        menu_groups: [
                            {
                                'title': 'component lib',
                                'sub_menus': [{
                                    'title': 'Buttons',
                                    'to': '/iview_component'
                                }]
                            }
                        ]
                    }
                ]
            }
        },
        components: {}
    }

</script>
<style scoped>
    .l-menu {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 0 50px;
    }
    .layout-logo {
        width: 146px;
        height: 30px;
        background-image: url("~@/assets/logo-title-145px-30px.png");
        background-size: 100%;
        border-radius: 3px;
        margin: auto 0;
    }

    .layout-nav {
        margin: 0 20px 0 auto;
    }

</style>
