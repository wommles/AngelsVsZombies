gdjs.OptionsCode = {};
gdjs.OptionsCode.GDSurvivedObjects1= [];
gdjs.OptionsCode.GDSurvivedObjects2= [];
gdjs.OptionsCode.GDOptionsObjects1= [];
gdjs.OptionsCode.GDOptionsObjects2= [];
gdjs.OptionsCode.GDNewObjectObjects1= [];
gdjs.OptionsCode.GDNewObjectObjects2= [];
gdjs.OptionsCode.GDReturnObjects1= [];
gdjs.OptionsCode.GDReturnObjects2= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};
gdjs.OptionsCode.condition2IsTrue_0 = {val:false};
gdjs.OptionsCode.conditionTrue_1 = {val:false};
gdjs.OptionsCode.condition0IsTrue_1 = {val:false};
gdjs.OptionsCode.condition1IsTrue_1 = {val:false};
gdjs.OptionsCode.condition2IsTrue_1 = {val:false};


gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDReturnObjects1Objects = Hashtable.newFrom({"Return": gdjs.OptionsCode.GDReturnObjects1});gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.OptionsCode.GDReturnObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition0IsTrue_0;
gdjs.OptionsCode.condition0IsTrue_1.val = false;
gdjs.OptionsCode.condition1IsTrue_1.val = false;
{
gdjs.OptionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDReturnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_1.val ) {
{
gdjs.OptionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.OptionsCode.conditionTrue_1.val = true && gdjs.OptionsCode.condition0IsTrue_1.val && gdjs.OptionsCode.condition1IsTrue_1.val;
}
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDSurvivedObjects1.length = 0;
gdjs.OptionsCode.GDSurvivedObjects2.length = 0;
gdjs.OptionsCode.GDOptionsObjects1.length = 0;
gdjs.OptionsCode.GDOptionsObjects2.length = 0;
gdjs.OptionsCode.GDNewObjectObjects1.length = 0;
gdjs.OptionsCode.GDNewObjectObjects2.length = 0;
gdjs.OptionsCode.GDReturnObjects1.length = 0;
gdjs.OptionsCode.GDReturnObjects2.length = 0;

gdjs.OptionsCode.eventsList0(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
