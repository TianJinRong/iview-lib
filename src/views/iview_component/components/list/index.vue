<template>
  <div class="">
    <h1>iview lib</h1>
    <br>
    <Tabs value="list">
      <TabPane label="Instruction" name="instruction">
        <ul>
          <li>Just click the component and copy the code.
          </li>
        </ul>
      </TabPane>
      <TabPane label="List" name="list">
        <h2>buttons</h2>
        <br>
        <h3 class="m-component__h3 l-component__h3">size:default</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-default')">
                <Button>Default</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-primary')">
                <Button type="primary">Primary</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-dashed')">
                <Button type="dashed">Dashed</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-text')">
                <Button type="text">Text</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-info')">
                <Button type="info">Info</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-success')">
                <Button type="success">Success</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-warning')">
                <Button type="warning">Warning</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-error')">
                <Button type="error">Error</Button>
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">size:large</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-large-default')">
                <Button size="large">Default</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-large-primary')">
                <Button size="large" type="primary">Primary</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-large-info')">
                <Button size="large" type="info">Info</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-large-success')">
                <Button size="large" type="success">Success</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-large-warning')">
                <Button size="large" type="warning">Warning</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-large-error')">
                <Button size="large" type="error">Error</Button>
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">size:small</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-small-default')">
                <Button size="small">Default</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-small-primary')">
                <Button size="small" type="primary">Primary</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-small-info')">
                <Button size="small" type="info">Info</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-small-success')">
                <Button size="small" type="success">Success</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-small-warning')">
                <Button size="small" type="warning">Warning</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-small-error')">
                <Button size="small" type="error">Error</Button>
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">circle</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-circle-icon-only')">
              <Button type="primary" shape="circle" icon="ios-search"></Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-circle')">
              <Button type="primary" shape="circle" icon="ios-search">Search</Button>
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">long</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-long-success')">
              <Button type="success" long>SUBMIT</Button>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-long-error')">
              <Button type="error" long>DELETE</Button>
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">disabled</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-disabled')">
              <Button disabled>Default(Disabled)</Button>
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">loading</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-loading')">
              <Button loading shape="circle">Loading</Button>
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">button groups</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-groups-style1')">
              <ButtonGroup shape="circle">
                <Button type="primary">
                    <Icon type="ios-arrow-back"></Icon>
                    Backward
                </Button>
                <Button type="primary">
                    Forward
                    <Icon type="ios-arrow-forward"></Icon>
                </Button>
            </ButtonGroup>
            </div>
          </li>
            <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-groups-style2')">
              <ButtonGroup shape="circle">
                <Button type="primary" icon="ios-skip-backward"></Button>
                <Button type="primary" icon="ios-skip-forward"></Button>
              </ButtonGroup>
            </div>
          </li>
            <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-groups-style3')">
              <ButtonGroup shape="circle">
                <Button icon="ios-color-wand-outline"></Button>
                <Button icon="ios-sunny-outline"></Button>
                <Button icon="ios-crop"></Button>
                <Button icon="ios-color-filter-outline"></Button>
              </ButtonGroup>
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">button vertical groups</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('button-groups-vertical')">
              <ButtonGroup vertical>
                <Button icon="logo-facebook"></Button>
                <Button icon="logo-twitter"></Button>
                <Button icon="logo-googleplus"></Button>
                <Button icon="logo-tumblr"></Button>
              </ButtonGroup>
            </div>
          </li>
        </ul>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    name: 'TheIviewComponentList',
    props: [],
    components: {
    },
    data () {
      return {
        codeDict: {
          "button-default":"<Button>Default</Button>",
          "button-primary":"<Button type=\"primary\">Primary</Button>",
          "button-dashed":"<Button type=\"dashed\">Dashed</Button>",
          "button-text":"<Button type=\"text\">Text</Button>",
          "button-info":"<Button type=\"info\">Info</Button>",
          "button-success":"<Button type=\"success\">Success</Button>",
          "button-warning":"<Button type=\"warning\">Warning</Button>",
          "button-error":"<Button type=\"error\">Error</Button>",
          "button-large-default":"<Button size=\"large\">Default</Button>",
          "button-large-primary":"<Button size=\"large\" type=\"primary\">Primary</Button>",
          "button-large-dashed":"<Button size=\"large\" type=\"dashed\">Dashed</Button>",
          "button-large-text":"<Button size=\"large\" type=\"text\">Text</Button>",
          "button-large-info":"<Button size=\"large\" type=\"info\">Info</Button>",
          "button-large-success":"<Button size=\"large\" type=\"success\">Success</Button>",
          "button-large-warning":"<Button size=\"large\" type=\"warning\">Warning</Button>",
          "button-large-error":"<Button size=\"large\" type=\"error\">Error</Button>",
          "button-small-default":"<Button size=\"small\">Default</Button>",
          "button-small-primary":"<Button size=\"small\" type=\"primary\">Primary</Button>",
          "button-small-dashed":"<Button size=\"small\" type=\"dashed\">Dashed</Button>",
          "button-small-text":"<Button size=\"small\" type=\"text\">Text</Button>",
          "button-small-info":"<Button size=\"small\" type=\"info\">Info</Button>",
          "button-small-success":"<Button size=\"small\" type=\"success\">Success</Button>",
          "button-small-warning":"<Button size=\"small\" type=\"warning\">Warning</Button>",
          "button-small-error":"<Button size=\"small\" type=\"error\">Error</Button>",
          "button-circle-icon-only": "<Button type=\"primary\" shape=\"circle\" icon=\"ios-search\"></Button>",
          "button-circle": "<Button type=\"primary\" shape=\"circle\" icon=\"ios-search\">Search</Button>",
          "button-long-success": "<Button type=\"success\" long>SUBMIT</Button>",
          "button-long-error": "<Button type=\"error\" long>DELETE</Button>",
          "button-disabled": "<Button disabled>Default(Disabled)</Button>",
          "button-loading": "<Button loading shape=\"circle\">Loading</Button>",
          "button-groups-style1": "<ButtonGroup shape=\"circle\">\
                <Button type=\"primary\">\
                    <Icon type=\"ios-arrow-back\"></Icon>\
                    Backward\
                </Button>\
                <Button type=\"primary\">\
                    Forward\
                    <Icon type=\"ios-arrow-forward\"></Icon>\
                </Button>\
            </ButtonGroup>",
          "button-groups-style2": "<ButtonGroup shape=\"circle\">\
                <Button type=\"primary\" icon=\"ios-skip-backward\"></Button>\
                <Button type=\"primary\" icon=\"ios-skip-forward\"></Button>\
            </ButtonGroup>",
          "button-groups-style3": "<ButtonGroup shape=\"circle\">\
                <Button icon=\"ios-color-wand-outline\"></Button>\
                <Button icon=\"ios-sunny-outline\"></Button>\
                <Button icon=\"ios-crop\"></Button>\
                <Button icon=\"ios-color-filter-outline\"></Button>\
            </ButtonGroup>",
          "button-groups-vertical": "<ButtonGroup vertical>\
                <Button icon=\"logo-facebook\"></Button>\
                <Button icon=\"logo-twitter\"></Button>\
                <Button icon=\"logo-googleplus\"></Button>\
                <Button icon=\"logo-tumblr\"></Button>\
              </ButtonGroup>",
        }
      };
    },
    methods: {
      copy(componentName) {
        // copy the code and display a notification
        let code = this.codeDict[componentName]
        this.$copyText(code).then((res) => {
          window.console.log('copy success:', res);
          this.$Message.success('copy success!')
        }).catch(err => {
          window.console.log('copy failed:', err);
          this.$Message.error('copy failed!')
        })
      }
    },
    mounted() {
    }
  }
</script>
<style scoped>
.l-component__ul {
  list-style: none;
  display: flex;
}
.l-component__h3 {
  margin: 10px auto 0 10px;
}
.l-component__li {
}
.l-component__copydiv {
  padding: 10px;
}
.m-component__copydiv {
  cursor: pointer;
  border: 2px solid rgba(124, 170, 255, 0);
  border-radius: 10px;
  width: auto;
}
.m-component__copydiv:hover {
  border: 2px solid #7CAAFF;
}
</style>