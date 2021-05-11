gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDSurvivedObjects1= [];
gdjs.Main_32MenuCode.GDSurvivedObjects2= [];
gdjs.Main_32MenuCode.GDSurvivedObjects3= [];
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects3= [];
gdjs.Main_32MenuCode.GDBeginObjects1= [];
gdjs.Main_32MenuCode.GDBeginObjects2= [];
gdjs.Main_32MenuCode.GDBeginObjects3= [];
gdjs.Main_32MenuCode.GDOptionsObjects1= [];
gdjs.Main_32MenuCode.GDOptionsObjects2= [];
gdjs.Main_32MenuCode.GDOptionsObjects3= [];
gdjs.Main_32MenuCode.GDInstructionsObjects1= [];
gdjs.Main_32MenuCode.GDInstructionsObjects2= [];
gdjs.Main_32MenuCode.GDInstructionsObjects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDBeginObjects2Objects = Hashtable.newFrom({"Begin": gdjs.Main_32MenuCode.GDBeginObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects1Objects = Hashtable.newFrom({"Options": gdjs.Main_32MenuCode.GDOptionsObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Begin"), gdjs.Main_32MenuCode.GDBeginObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDBeginObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDSurvivedObjects1.length = 0;
gdjs.Main_32MenuCode.GDSurvivedObjects2.length = 0;
gdjs.Main_32MenuCode.GDSurvivedObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDBeginObjects1.length = 0;
gdjs.Main_32MenuCode.GDBeginObjects2.length = 0;
gdjs.Main_32MenuCode.GDBeginObjects3.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects1.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects2.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects3.length = 0;
gdjs.Main_32MenuCode.GDInstructionsObjects1.length = 0;
gdjs.Main_32MenuCode.GDInstructionsObjects2.length = 0;
gdjs.Main_32MenuCode.GDInstructionsObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
