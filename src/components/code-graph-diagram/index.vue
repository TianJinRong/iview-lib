<template>
    <Row>
        <Col span="18" class="l-component__left">
            <h2 class="l-component__h2">Display Model</h2>
            <vue-json-editor
                v-model="gojsComponentDisplayModel"
                :show-btns="false"
                :exapndedOnStart="true">
            </vue-json-editor>
            <h2 class="l-component__h2">Data Model</h2>
            <vue-json-editor
                v-model="gojsComponentDataModel"
                :show-btns="false"
                :exapndedOnStart="true">
            </vue-json-editor>
            <br>
            <Button shape="circle" @click="updateGraph()">Update the graph</Button>
            <h2 class="l-component__h2">Preview Graph</h2>
            <div id="graphDiv">

            </div>
            <h2 class="l-component__h2">Code</h2>
            <CodeMirrorEditor
                :code="gojsComponentCode"
                :mode="'vue'"></CodeMirrorEditor>
        </Col>
        <Col span="6">
            <h2 class="l-component__h2">Add Primary Component</h2>
            <Tabs type="card" class="l-tabs" name="primarycomponent">
                <TabPane 
                    label="Node" tab="primarycomponent">
                    <div class="l-code-graph__tabpane m-code-graph__tabpane">
                        <div class="m-component__field">
                        <label for="">class type:</label>
                        <Input v-model="editingComponentDisplayModels.node.class_type"/>
                        </div>
                        <div class="m-component__field">
                        <label for="">:first_argument.data</label>
                        <Input v-model="editingComponentDisplayModels.node.first_argument.data"/>
                        </div>
                        <Button shape="circle" circle type="primary" @click="addToDisplayModel('node')">add to display model</Button>
                    </div>
                </TabPane>
                <TabPane 
                    label="TextBlock" tab="primarycomponent">
                    <div class="l-code-graph__tabpane m-code-graph__tabpane">
                        <div class="m-component__field">
                        <label class="m-component__label" for="">class type:</label>
                        <Input class="m-component__input" v-model="editingComponentDisplayModels.textblock.class_type"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label" for="">text</label>
                        <Input class="m-component__input" v-model="editingComponentDisplayModels.textblock.first_argument.data.text"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label" for="">margin</label>
                        <Input class="m-component__input" v-model="editingComponentDisplayModels.textblock.first_argument.data.margin"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label" for="">font</label>
                        <Input class="m-component__input" v-model="editingComponentDisplayModels.textblock.first_argument.data.font"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label">stroke</label>
                        <ColorPicker class="m-component__input" v-model="editingComponentDisplayModels.textblock.first_argument.data.stroke" :colors="colors"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label">background</label>
                        <ColorPicker class="m-component__input" v-model="editingComponentDisplayModels.textblock.first_argument.data.background" :colors="colors"/>
                        </div>

                        <div class="m-component__field">
                        <label class="m-component__label">editable</label>
                        <i-switch v-model="editingComponentDisplayModels.textblock.first_argument.data.editable"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label">isMultiline</label>
                        <i-switch v-model="editingComponentDisplayModels.textblock.first_argument.data.isMultiline"/>
                        </div>

                        <!-- data bindings -->
                        <div class="m-component__field">
                        <LightTable class="m-component__input"
                            inputLabel="data binding"
                            :inputData="editingComponentDisplayModels.textblock.data_bindings"
                            :inputColumns="dataBindingColumns"
                            :defaultRow="defaultDataBinding"
                            ref="textblockDataBindings"
                        />
                        </div>
                        <!-- data bindings -->

                        <Button shape="circle" type="primary" @click="addToDisplayModel('textblock')">add to display model</Button>
                    </div>
                </TabPane>
                <TabPane 
                    label="Shape" tab="primarycomponent">
                    <div class="l-code-graph__tabpane m-code-graph__tabpane">
                        <div class="m-component__field">
                        <label class="m-component__label" for="">class type:</label>
                        <Input class="m-component__input" v-model="editingComponentDisplayModels.shape.class_type"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label" for="">figure</label>
                        <Select class="m-component__input" v-model="editingComponentDisplayModels.shape.first_argument.data.figure">
                            <Option value="Rectangle">Rectangle</Option>
                            <Option value="RoundedRectangle">RoundedRectangle</Option>
                            <Option value="Ellipse">Ellipse</Option>
                            <Option value="Diamond">Diamond</Option>
                            <Option value="TriangleRight">TriangleRight</Option>
                            <Option value="TriangleDown">TriangleDown</Option>
                            <Option value="TriangleLeft">TriangleLeft</Option>
                            <Option value="TriangleUp">TriangleUp</Option>
                            <Option value="MinusLine">MinusLine</Option>
                            <Option value="PlusLine">PlusLine</Option>
                            <Option value="XLine">XLine</Option>
                        </Select>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label" for="">width</label>
                        <Input class="m-component__input" v-model="editingComponentDisplayModels.shape.first_argument.data.width"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label" for="">height</label>
                        <Input class="m-component__input" v-model="editingComponentDisplayModels.shape.first_argument.data.height"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label">strokeWidth</label>
                        <Input class="m-component__input" v-model="editingComponentDisplayModels.shape.first_argument.data.strokeWidth" />
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label">stroke</label>
                        <ColorPicker class="m-component__input" v-model="editingComponentDisplayModels.shape.first_argument.data.stroke" :colors="colors"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label">fill</label>
                        <ColorPicker class="m-component__input" v-model="editingComponentDisplayModels.shape.first_argument.data.fill" :colors="colors"/>
                        </div>
                        <div class="m-component__field">
                        <label class="m-component__label">background</label>
                        <ColorPicker class="m-component__input" v-model="editingComponentDisplayModels.shape.first_argument.data.background" :colors="colors"/>

                        <!-- data bindings -->
                        </div>
                        <div class="m-component__field">
                        <LightTable class="m-component__input"
                            inputLabel="data bindings"
                            :inputData="editingComponentDisplayModels.shape.data_bindings"
                            :inputColumns="dataBindingColumns"
                            :defaultRow="defaultDataBinding"
                            ref="shapeDataBindings"
                        />
                        <!-- data bindings -->

                        <!-- event bindings -->
                        </div>
                        <div class="m-component__field">
                        <LightTable class="m-component__input"
                            inputLabel="event binding"
                            :inputData="editingComponentDisplayModels.shape.event_bindings"
                            :inputColumns="eventBindingColumns"
                            :defaultRow="defaultEventBinding"
                            ref="shapeEventBindings"
                        />
                        </div>
                        <!-- event bindings -->

                        <Button shape="circle" type="primary" @click="addToDisplayModel('shape')">add to display model</Button>
                    </div>
                </TabPane>
            </Tabs>
        </Col>
    </Row>
</template>
<script>
import go from 'gojs';
import CodeMirrorEditor from '@/components/codemirror-editor'
import LightTable from '@/components/light-table'
import vueJsonEditor from 'vue-json-editor'
export default {
    name: 'CodeGraphDiagram',
    props: [],
    components: {
        vueJsonEditor,
        CodeMirrorEditor,
        LightTable
    },
    data() {
        return {
            gojsComponentDisplayModel:[
                {
                    class_type: "Node",
                    first_argument: {
                        type: "string",
                        data: "Auto"
                    },
                    sub_gojs_components: [
                        {
                            type: "object",
                            data: {
                                name: "Shape",
                                class_type: "Shape",
                                first_argument: {
                                    type: "json",
                                    data: {
                                        figure: "Ellipse",
                                        fill: "white"
                                    }
                                },
                                sub_gojs_components: []
                            }
                        },
                        {
                            type: "object",
                            data: {
                                name: "TextBlock",
                                class_type: "TextBlock",
                                first_argument: {
                                    type: "string",
                                    data: "Round Item"
                                },
                                sub_gojs_components: []
                            }
                        }
                    ]
                }
            ],
            gojsComponentDataModel:[
                {key: "example"}
            ],
            gojsComponentCode: '',
            displayView: 'graph',
            defaultComponentDisplayModels: {
                node: {
                    class_type: 'Node',
                    first_argument: {
                        type: 'string',
                        data: 'Auto'
                    },
                },
                textblock: {
                    class_type: 'Textblock',
                    first_argument: {
                        type: 'json',
                        data: {
                            text: '',
                            stroke: '',
                            background: '',
                            font: '',
                            editable: true,
                            isMultiline: false,
                            margin: ''
                        }
                    },
                    data_bindings: [],
                    editing_data_binding_index: 0,
                },
                shape: {
                    class_type: 'Shape',
                    first_argument: {
                        type: 'json',
                        data: {
                            figure: '',
                            width: 'auto',
                            height: 'auto',
                            fill: '',
                            stroke: '',
                            strokeWidth: 1,
                            background: ''
                        }
                    },
                    data_bindings: [],
                    event_bindings: [],
                    editing_data_binding_index: 0,
                    editing_event_binding_index: 0,
                }
            },
            editingComponentDisplayModels: {
                node: {
                    class_type: 'Node',
                    first_argument: {
                        type: 'string',
                        data: 'Auto'
                    },
                },
                textblock: {
                    class_type: 'Textblock',
                    first_argument: {
                        type: 'json',
                        data: {
                            text: '',
                            stroke: 'black',
                            background: '',
                            font: '',
                            editable: true,
                            isMultiline: false,
                            margin: ''
                        }
                    },
                    data_bindings: [],
                    editing_data_binding_index: 0,
                },
                shape: {
                    class_type: 'Shape',
                    first_argument: {
                        type: 'json',
                        data: {
                            figure: '',
                            width: 'auto',
                            height: 'auto',
                            fill: '#1C7C54',
                            stroke: 'black',
                            strokeWidth: 1,
                            background: '#1C7C54'
                        }
                    },
                    data_bindings: [],
                    event_bindings: [],
                    editing_data_binding_index: 0,
                    editing_event_binding_index: 0,
                }
            },
            dataBindingColumns: [
                {
                    title: 'component attribute',
                    slot: 'display_component_attribute'
                },
                {
                    title: 'model attribute',
                    slot: 'model_attribute'
                },
                {
                    title: 'action',
                    slot: 'action'
                }
            ],
            eventBindingColumns: [
                {
                    title: 'event',
                    slot: 'event_name'
                },
                {
                    title: 'function',
                    slot: 'event_handler'
                },
                {
                    title: 'action',
                    slot: 'action'
                }
            ],
            defaultDataBinding: {
                display_component_attribute: '',
                model_attribute: ''
            },
            defaultEventBinding: {
                event_name: 'click',
                event_handler: 'onClick'
            },
            colors: ["#1C7C54", "#73E2A7", "#DEF4C6", "#1B512D", "#B1CF5F"],

            /** TODO: delete old configs as follows */
            id: null, // 当前 code graph 的id。如果没有，则提交保存时视为 create，否则为 update
            palette: null,
            codeGraph: { // 当前 code graph
                id: null,
                name:  'New code graph',
                description: 'This is an empyt code graph',
                graph_json: null,
                data_json: null,
            }, 
            dragged: null, // 当前被拖拽的控件
            fullCode: '', // 完整代码
            diagramTitle: '画板', // 画板的标题
            diagram: null, // 主图
            updateModelKey: -2, // 当前正在编辑的节点key
            selectedNodeData: {}, // 当前选中节点数据
            viewingCodeNodes:[], // 查看详情的代码段
            templateModel: [ // 模板对应模型
                {
                    group_name: "Atom Container",
                    data: [
                        {
                            name: "Node",
                            class_type: "Node",
                            first_argument: {
                                type: "string",
                                data: "Auto"
                            },
                            init_arguments: []
                        },
                        {
                            name: "Panel",
                            class_type: "Panel",
                            first_argument: {
                                type: "string",
                                data: "Auto"
                            },
                            init_arguments: []
                        },
                        
                    ]
                },
                {
                    group_name: "Atom Item",
                    data: [
                        {
                            name: "Shape",
                            class_type: "Shape",
                            first_argument: {
                                type: "string",
                                data: "Auto"
                            },
                            init_arguments: []
                        },
                        {
                            name: "TextBlock",
                            class_type: "TextBlock",
                            first_argument: {
                                type: "string",
                                data: "Auto"
                            },
                            init_arguments: []
                        },
                    ]
                },
                {
                    group_name: "Combine Item",
                    data: [
                        {
                            name: "Round Item",
                            class_type: "Node",
                            first_argument: {
                                type: "string",
                                data: "Auto"
                            },
                            init_arguments: [
                                {
                                    type: "object",
                                    data: {
                                        name: "Shape",
                                        class_type: "Shape",
                                        first_argument: {
                                            type: "string",
                                            data: "Ellipse"
                                        },
                                        init_arguments: [
                                            {
                                                type: "json",
                                                data: {
                                                    fill: "white"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    type: "object",
                                    data: {
                                        name: "TextBlock",
                                        class_type: "TextBlock",
                                        first_argument: {
                                            type: "string",
                                            data: "Round Item"
                                        },
                                        init_arguments: []
                                    }
                                }
                            ]
                        }
                    ]
                }
                
            ], // 获取到的所有机器学习代码模板
            draggedMachineLearningCode: null, // 当前被拖拽的控件对应的机器学习代码模板
        }
    },
    methods: {
        addToDisplayModel(classType) {
            let newData = {...this.editingComponentDisplayModels[classType]};
            if (classType == 'shape' || classType == 'textblock') {
                let dataBindings = [...this.$refs.shapeDataBindings.data];
                newData.data_bindings = dataBindings;
            }

            if (classType == 'shape') {
                let eventBindings = [...this.$refs.shapeEventBindings.data];
                newData.event_bindings = eventBindings;
            }
            this.gojsComponentDisplayModel.push(newData);
            // window.console.log(classType, newData, this.gojsComponentDisplayModel);
        },
        resetToDefaultDisplayModel(classType) {
            let defaultModel = {...this.defaultComponentDisplayModels[classType]};
            this.$set(this.editingComponentDisplayModels, classType, defaultModel);
            window.console.log(classType, defaultModel, this.editingComponentDisplayModels[classType], this.defaultComponentDisplayModels[classType]);
        },
        templateModelToGraph(templateModel) {
            let that = this;

            /** make the core node would display. */
            let templateModelBackup = {...templateModel}
            let classType = templateModelBackup.class_type;
            let firstArgumentData = templateModelBackup.first_argument.data;
            let input_arguments = [
                go[classType], firstArgumentData, 
            ];
            window.console.log("input_arguments:", input_arguments);
            templateModelBackup.sub_gojs_components.forEach(init_argument => {
                let argumentType = init_argument.type;
                let argumentData = init_argument.data;
                if (argumentType == "object") {
                    argumentData = that.templateModelToGraph(argumentData);
                }
                input_arguments.push(argumentData);
            });
            /** make the core node would display. */

            window.console.log("生成(", templateModel,")的 template 结果:", input_arguments)
            let tempGraph = go.GraphObject.make.apply(null, input_arguments);
            window.console.log("添加完成");

            return tempGraph;
        },
        updateGraph() {
            // replace the default template and reload the model
            let displayModel = this.gojsComponentDisplayModel[0];
            let template = this.templateModelToGraph(displayModel);
            this.diagram.nodeTemplate = template;
            let that = this;
            this.axios
                .post('/api/gojs_component/code', {
                    template_model: displayModel
                })
                .then(function (response) {
                    that.$Message.success('Success!');
                    window.console.log(response.data);
                    that.gojsComponentCode = response.data;
                });
        },
        initDiagram() {
            // diagram
            let $ = go.GraphObject.make;
            let diagram = $(go.Diagram, "graphDiv", {});

            // load current node template
            let displayModel = this.gojsComponentDisplayModel[0];
            let template = this.templateModelToGraph(displayModel);
            diagram.nodeTemplate = template;

            // display the  grid on the canvas
            diagram.grid.visible = true;
            this.diagram = diagram;
            this.diagram.model.nodeDataArray = this.gojsComponentDataModel;
        },
    },
    mounted: function () {
        this.initDiagram();
    }
}
</script>

<style scoped>
.l-component__left {
    padding-right: 20px;
}
.l-component__h2 {
    margin: 10px auto 5px auto;
}
.m-component__field {
    padding: 5px 0;
}
.m-component__label {
    /* display: inline-block; */
    /* text-align: right; */
    /* width: 30%; */
    font-weight: bold;
    padding-right: 10px;
}
.m-component__input {
    /* width: 70%; */
}
.palette-div {
    padding-right: 20px;
}
.l-code-graph__tabpane {
    padding: 0 20px 20px 20px;
}
.m-code-graph__tabpane {
    border-left: 1px solid #dcdee2;
    border-bottom: 1px solid #dcdee2;
    border-right: 1px solid #dcdee2;
}
#graphDiv {
    height: 200px;
}
</style>