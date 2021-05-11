gdjs.OptionsCode = {};
gdjs.OptionsCode.GDSurvivedObjects1= [];
gdjs.OptionsCode.GDSurvivedObjects2= [];
gdjs.OptionsCode.GDPlayerObjects1= [];
gdjs.OptionsCode.GDPlayerObjects2= [];
gdjs.OptionsCode.GDZombieObjects1= [];
gdjs.OptionsCode.GDZombieObjects2= [];
gdjs.OptionsCode.GDBulletObjects1= [];
gdjs.OptionsCode.GDBulletObjects2= [];
gdjs.OptionsCode.GDReloadObjects1= [];
gdjs.OptionsCode.GDReloadObjects2= [];
gdjs.OptionsCode.GDPistolObjects1= [];
gdjs.OptionsCode.GDPistolObjects2= [];
gdjs.OptionsCode.GDDeadZombieObjects1= [];
gdjs.OptionsCode.GDDeadZombieObjects2= [];
gdjs.OptionsCode.GDShieldObjects1= [];
gdjs.OptionsCode.GDShieldObjects2= [];
gdjs.OptionsCode.GDFlameWerferObjects1= [];
gdjs.OptionsCode.GDFlameWerferObjects2= [];
gdjs.OptionsCode.GDFlameObjects1= [];
gdjs.OptionsCode.GDFlameObjects2= [];
gdjs.OptionsCode.GDStatsObjects1= [];
gdjs.OptionsCode.GDStatsObjects2= [];
gdjs.OptionsCode.GDFuelObjects1= [];
gdjs.OptionsCode.GDFuelObjects2= [];
gdjs.OptionsCode.GDAmmoObjects1= [];
gdjs.OptionsCode.GDAmmoObjects2= [];
gdjs.OptionsCode.GDFuelBarObjects1= [];
gdjs.OptionsCode.GDFuelBarObjects2= [];
gdjs.OptionsCode.GDAmmoBarObjects1= [];
gdjs.OptionsCode.GDAmmoBarObjects2= [];
gdjs.OptionsCode.GDCaseObjects1= [];
gdjs.OptionsCode.GDCaseObjects2= [];
gdjs.OptionsCode.GDLifeHeartObjects1= [];
gdjs.OptionsCode.GDLifeHeartObjects2= [];
gdjs.OptionsCode.GDWall2Objects1= [];
gdjs.OptionsCode.GDWall2Objects2= [];
gdjs.OptionsCode.GDSpawnZoneObjects1= [];
gdjs.OptionsCode.GDSpawnZoneObjects2= [];
gdjs.OptionsCode.GDLifeLostObjects1= [];
gdjs.OptionsCode.GDLifeLostObjects2= [];
gdjs.OptionsCode.GDStatsTVObjects1= [];
gdjs.OptionsCode.GDStatsTVObjects2= [];
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
gdjs.OptionsCode.GDPlayerObjects1.length = 0;
gdjs.OptionsCode.GDPlayerObjects2.length = 0;
gdjs.OptionsCode.GDZombieObjects1.length = 0;
gdjs.OptionsCode.GDZombieObjects2.length = 0;
gdjs.OptionsCode.GDBulletObjects1.length = 0;
gdjs.OptionsCode.GDBulletObjects2.length = 0;
gdjs.OptionsCode.GDReloadObjects1.length = 0;
gdjs.OptionsCode.GDReloadObjects2.length = 0;
gdjs.OptionsCode.GDPistolObjects1.length = 0;
gdjs.OptionsCode.GDPistolObjects2.length = 0;
gdjs.OptionsCode.GDDeadZombieObjects1.length = 0;
gdjs.OptionsCode.GDDeadZombieObjects2.length = 0;
gdjs.OptionsCode.GDShieldObjects1.length = 0;
gdjs.OptionsCode.GDShieldObjects2.length = 0;
gdjs.OptionsCode.GDFlameWerferObjects1.length = 0;
gdjs.OptionsCode.GDFlameWerferObjects2.length = 0;
gdjs.OptionsCode.GDFlameObjects1.length = 0;
gdjs.OptionsCode.GDFlameObjects2.length = 0;
gdjs.OptionsCode.GDStatsObjects1.length = 0;
gdjs.OptionsCode.GDStatsObjects2.length = 0;
gdjs.OptionsCode.GDFuelObjects1.length = 0;
gdjs.OptionsCode.GDFuelObjects2.length = 0;
gdjs.OptionsCode.GDAmmoObjects1.length = 0;
gdjs.OptionsCode.GDAmmoObjects2.length = 0;
gdjs.OptionsCode.GDFuelBarObjects1.length = 0;
gdjs.OptionsCode.GDFuelBarObjects2.length = 0;
gdjs.OptionsCode.GDAmmoBarObjects1.length = 0;
gdjs.OptionsCode.GDAmmoBarObjects2.length = 0;
gdjs.OptionsCode.GDCaseObjects1.length = 0;
gdjs.OptionsCode.GDCaseObjects2.length = 0;
gdjs.OptionsCode.GDLifeHeartObjects1.length = 0;
gdjs.OptionsCode.GDLifeHeartObjects2.length = 0;
gdjs.OptionsCode.GDWall2Objects1.length = 0;
gdjs.OptionsCode.GDWall2Objects2.length = 0;
gdjs.OptionsCode.GDSpawnZoneObjects1.length = 0;
gdjs.OptionsCode.GDSpawnZoneObjects2.length = 0;
gdjs.OptionsCode.GDLifeLostObjects1.length = 0;
gdjs.OptionsCode.GDLifeLostObjects2.length = 0;
gdjs.OptionsCode.GDStatsTVObjects1.length = 0;
gdjs.OptionsCode.GDStatsTVObjects2.length = 0;
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
