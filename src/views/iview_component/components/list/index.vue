<template>
  <div class="">
    <h1>iview lib</h1>
    <br>
    <Alert type="info" show-icon>
      Instruction
      <span slot="desc">Just click the component and copy the code. Have fun :)</span>
    </Alert>
    <Tabs>
      <TabPane label="Inputs" name="inputs">
        <h2 class="m-component__h2 l-component__h2">inputs</h2>
        <h3 class="m-component__h3 l-component__h3">common inputs</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-large')">
              <Input size="large" placeholder="large size" />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-default')">
              <Input placeholder="Enter something..." />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-small')">
              <Input size="small" placeholder="small size" />
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">clearable</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-clearable')">
              <Input value="Clearable" placeholder="clearable" clearable style="width: 200px" />
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">word limit</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-textarea-word-limit')">
              <Input maxlength="100" show-word-limit type="textarea" placeholder="Enter something..."
                style="width: 200px" />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-word-limit')">
              <Input maxlength="10" show-word-limit placeholder="Enter something..." style="width: 200px" />
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">password</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-password')">
              <Input value="password" type="password" password placeholder="Enter something..." style="width: 200px" />
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">with icon</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-icon')">
              <Input value="with icon" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px" />
            </div>
          </li>
        </ul>
                <h3 class="m-component__h3 l-component__h3">prefix and suffix: use props</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-prefix-props')">
                <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-suffix-props')">
                <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">prefix and suffix: use slots</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-prefix-slots')">
                <Input placeholder="Enter name" style="width: auto">
                  <Icon type="ios-contact" slot="prefix" />
                </Input>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-suffix-slots')">
              <Input placeholder="Enter text" style="width: auto">
                <Icon type="ios-search" slot="suffix" />
              </Input>
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">search</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-search')">
                <Input search placeholder="Enter something..." />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-enter-search1')">
                <Input search enter-button placeholder="Enter something..." />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-enter-search2')">
                <Input search enter-button="Search" placeholder="Enter something..." />
            </div>
          </li>
        </ul>
        <h3 class="m-component__h3 l-component__h3">textarea</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-textarea')">
                 <Input type="textarea" placeholder="Enter something..." />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-textarea2')">
                <Input type="textarea" :rows="4" placeholder="Enter something..." />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-textarea3')">
                <Input type="textarea" :autosize="true" placeholder="Enter something..." />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-textarea4')">
                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">disable</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-disable')">
                <Input disabled placeholder="Enter something..." />
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-textarea-disable')">
                <Input disabled type="textarea" placeholder="Enter something..." />
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">prepend and append</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-prepend-append-1')">
                <Input value="test">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </Input>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-prepend-append-2')">
                <Input value="test">
                    <Select value="https" slot="prepend" style="width: 80px">
                        <Option value="http">http://</Option>
                        <Option value="https">https://</Option>
                    </Select>
                    <Select value="com" slot="append" style="width: 70px">
                        <Option value="com">.com</Option>
                        <Option value="org">.org</Option>
                        <Option value="io">.io</Option>
                    </Select>
                </Input>
            </div>
          </li>
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-prepend-append-3')">
                <Input value="10">
                    <Select value="day" slot="prepend" style="width: 80px">
                        <Option value="day">Day</Option>
                        <Option value="month">Month</Option>
                    </Select>
                    <Button slot="append" icon="ios-search"></Button>
                </Input>
            </div>
          </li>
        </ul>

        <h3 class="m-component__h3 l-component__h3">show tips</h3>
        <ul class="m-component__ul l-component__ul">
          <li class="m-component__li l-component__li">
            <div class="m-component__copydiv l-component__copydiv" @click="copy('input-showtips')">
                <Poptip trigger="focus">
                    <Input prefix="logo-usd" placeholder="Enter number" style="width: 300px" />
                    <div slot="content">Display the tip message</div>
                </Poptip>
            </div>
          </li>
        </ul>
      </TabPane>
      <TabPane label="Buttons" name="buttons">
        <h2 class="m-component__h2 l-component__h2">buttons</h2>
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
    components: {},
    data() {
      return {
        codeDict: {
          "button-default": "<Button>Default</Button>",
          "button-primary": "<Button type=\"primary\">Primary</Button>",
          "button-dashed": "<Button type=\"dashed\">Dashed</Button>",
          "button-text": "<Button type=\"text\">Text</Button>",
          "button-info": "<Button type=\"info\">Info</Button>",
          "button-success": "<Button type=\"success\">Success</Button>",
          "button-warning": "<Button type=\"warning\">Warning</Button>",
          "button-error": "<Button type=\"error\">Error</Button>",
          "button-large-default": "<Button size=\"large\">Default</Button>",
          "button-large-primary": "<Button size=\"large\" type=\"primary\">Primary</Button>",
          "button-large-dashed": "<Button size=\"large\" type=\"dashed\">Dashed</Button>",
          "button-large-text": "<Button size=\"large\" type=\"text\">Text</Button>",
          "button-large-info": "<Button size=\"large\" type=\"info\">Info</Button>",
          "button-large-success": "<Button size=\"large\" type=\"success\">Success</Button>",
          "button-large-warning": "<Button size=\"large\" type=\"warning\">Warning</Button>",
          "button-large-error": "<Button size=\"large\" type=\"error\">Error</Button>",
          "button-small-default": "<Button size=\"small\">Default</Button>",
          "button-small-primary": "<Button size=\"small\" type=\"primary\">Primary</Button>",
          "button-small-dashed": "<Button size=\"small\" type=\"dashed\">Dashed</Button>",
          "button-small-text": "<Button size=\"small\" type=\"text\">Text</Button>",
          "button-small-info": "<Button size=\"small\" type=\"info\">Info</Button>",
          "button-small-success": "<Button size=\"small\" type=\"success\">Success</Button>",
          "button-small-warning": "<Button size=\"small\" type=\"warning\">Warning</Button>",
          "button-small-error": "<Button size=\"small\" type=\"error\">Error</Button>",
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
          "input-large": "<Input size=\"large\" placeholder=\"large size\" />",
          "input-default": "<Input placeholder=\"Enter something...\" />",
          "input-small": "<Input size=\"small\" placeholder=\"small size\" />",
          "input-clearable": "<Input value=\"Clearable\" placeholder=\"clearable\" clearable style=\"width: 200px\" />",
          "input-textarea-word-limit": "<Input maxlength=\"100\" show-word-limit type=\"textarea\" placeholder=\"Enter something...\" style=\"width: 200px\" />",
          "input-word-limit": "<Input maxlength=\"10\" show-word-limit placeholder=\"Enter something...\" style=\"width: 200px\" />",
          "input-password": "<Input value=\"password\" type=\"password\" password placeholder=\"Enter something...\" style=\"width: 200px\" />",
          "input-icon": "<Input value=\"with icon\" icon=\"ios-clock-outline\" placeholder=\"Enter something...\" style=\"width: 200px\" />",
          "input-prefix-props": "<Input prefix=\"ios-contact\" placeholder=\"Enter name\" style=\"width: auto\" />",
          "input-suffix-props": "<Input suffix=\"ios-search\" placeholder=\"Enter text\" style=\"width: auto\" />",
          "input-prefix-slots": "<Input placeholder=\"Enter name\" style=\"width: auto\">\
            <Icon type=\"ios-contact\" slot=\"prefix\" />\
          </Input>",
          "input-suffix-slots": "<Input placeholder=\"Enter name\" style=\"width: auto\">\
            <Icon type=\"ios-search\" slot=\"suffix\" />\
          </Input>",

          "input-search": "<Input search placeholder=\"Enter something...\" />",
          "input-enter-search1": "<Input search enter-button placeholder=\"Enter something...\" />",
          "input-enter-search2": "<Input search enter-button=\"Search\" placeholder=\"Enter something...\" />",

          "input-textarea": "<Input type=\"textarea\" placeholder=\"Enter something...\" />",
          "input-textarea2": "<Input type=\"textarea\" :rows=\"4\" placeholder=\"Enter something...\" />",
          "input-textarea3": "<Input type=\"textarea\" :autosize=\"true\" placeholder=\"Enter something...\" />",
          "input-textarea4": "<Input type=\"textarea\" :autosize=\"{minRows: 2,maxRows: 5}\" placeholder=\"Enter something...\" />",
          "input-disable": "<Input disabled placeholder=\"Enter something...\" />",
          "input-textarea-disable": "<Input disabled type=\"textarea\" placeholder=\"Enter something...\" />",
          "input-prepend-append-1": "<Input value=\"test\">\
              <span slot=\"prepend\">http://</span>\
              <span slot=\"append\">.com</span>\
          </Input>",
          "input-prepend-append-2": "<Input value=\"test\">\
              <Select value=\"https\" slot=\"prepend\" style=\"width: 80px\">\
                  <Option value=\"http\">http://</Option>\
                  <Option value=\"https\">https://</Option>\
              </Select>\
              <Select value=\"com\" slot=\"append\" style=\"width: 70px\">\
                  <Option value=\"com\">.com</Option>\
                  <Option value=\"org\">.org</Option>\
                  <Option value=\"io\">.io</Option>\
              </Select>\
          </Input>",
          "input-prepend-append-3": "<Input value=\"10\">\
              <Select value=\"day\" slot=\"prepend\" style=\"width: 80px\">\
                  <Option value=\"day\">Day</Option>\
                  <Option value=\"month\">Month</Option>\
              </Select>\
              <Button slot=\"append\" icon=\"ios-search\"></Button>\
          </Input>",
          "input-showtips": "<Poptip trigger=\"focus\">\
              <Input prefix=\"logo-usd\" placeholder=\"Enter number\" style=\"width: 300px\" />\
              <div slot=\"content\">Display the tip message</div>\
          </Poptip>",
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
    mounted() {}
  }
</script>
<style scoped>
  .l-component__ul {
    list-style: none;
    display: flex;
  }
  .l-component__h2 {
    margin: 0 auto 10px 10px;
  }
  .l-component__h3 {
    margin: 10px auto 0 10px;
  }

  .l-component__h3 {
    margin: 10px auto 0 10px;
  }

  .l-component__li {}

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