gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDSurvivedObjects1= [];
gdjs.Game_32OverCode.GDSurvivedObjects2= [];
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDTextObjects1= [];
gdjs.Game_32OverCode.GDTextObjects2= [];
gdjs.Game_32OverCode.GDBlockerObjects1= [];
gdjs.Game_32OverCode.GDBlockerObjects2= [];
gdjs.Game_32OverCode.GDreturnObjects1= [];
gdjs.Game_32OverCode.GDreturnObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreturnObjects1Objects = Hashtable.newFrom({"return": gdjs.Game_32OverCode.GDreturnObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Survived"), gdjs.Game_32OverCode.GDSurvivedObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDSurvivedObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSurvivedObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Survived"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("return"), gdjs.Game_32OverCode.GDreturnObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.condition0IsTrue_1.val = false;
gdjs.Game_32OverCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreturnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_1.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Game_32OverCode.conditionTrue_1.val = true && gdjs.Game_32OverCode.condition0IsTrue_1.val && gdjs.Game_32OverCode.condition1IsTrue_1.val;
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDSurvivedObjects1.length = 0;
gdjs.Game_32OverCode.GDSurvivedObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDTextObjects1.length = 0;
gdjs.Game_32OverCode.GDTextObjects2.length = 0;
gdjs.Game_32OverCode.GDBlockerObjects1.length = 0;
gdjs.Game_32OverCode.GDBlockerObjects2.length = 0;
gdjs.Game_32OverCode.GDreturnObjects1.length = 0;
gdjs.Game_32OverCode.GDreturnObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
