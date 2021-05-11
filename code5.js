gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDSurvivedObjects1= [];
gdjs.New_32sceneCode.GDSurvivedObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDZombieObjects1= [];
gdjs.New_32sceneCode.GDZombieObjects2= [];
gdjs.New_32sceneCode.GDBulletObjects1= [];
gdjs.New_32sceneCode.GDBulletObjects2= [];
gdjs.New_32sceneCode.GDReloadObjects1= [];
gdjs.New_32sceneCode.GDReloadObjects2= [];
gdjs.New_32sceneCode.GDPistolObjects1= [];
gdjs.New_32sceneCode.GDPistolObjects2= [];
gdjs.New_32sceneCode.GDDeadZombieObjects1= [];
gdjs.New_32sceneCode.GDDeadZombieObjects2= [];
gdjs.New_32sceneCode.GDShieldObjects1= [];
gdjs.New_32sceneCode.GDShieldObjects2= [];
gdjs.New_32sceneCode.GDFlameWerferObjects1= [];
gdjs.New_32sceneCode.GDFlameWerferObjects2= [];
gdjs.New_32sceneCode.GDFlameObjects1= [];
gdjs.New_32sceneCode.GDFlameObjects2= [];
gdjs.New_32sceneCode.GDStatsObjects1= [];
gdjs.New_32sceneCode.GDStatsObjects2= [];
gdjs.New_32sceneCode.GDFuelObjects1= [];
gdjs.New_32sceneCode.GDFuelObjects2= [];
gdjs.New_32sceneCode.GDAmmoObjects1= [];
gdjs.New_32sceneCode.GDAmmoObjects2= [];
gdjs.New_32sceneCode.GDFuelBarObjects1= [];
gdjs.New_32sceneCode.GDFuelBarObjects2= [];
gdjs.New_32sceneCode.GDAmmoBarObjects1= [];
gdjs.New_32sceneCode.GDAmmoBarObjects2= [];
gdjs.New_32sceneCode.GDCaseObjects1= [];
gdjs.New_32sceneCode.GDCaseObjects2= [];
gdjs.New_32sceneCode.GDLifeHeartObjects1= [];
gdjs.New_32sceneCode.GDLifeHeartObjects2= [];
gdjs.New_32sceneCode.GDWall2Objects1= [];
gdjs.New_32sceneCode.GDWall2Objects2= [];
gdjs.New_32sceneCode.GDSpawnZoneObjects1= [];
gdjs.New_32sceneCode.GDSpawnZoneObjects2= [];
gdjs.New_32sceneCode.GDLifeLostObjects1= [];
gdjs.New_32sceneCode.GDLifeLostObjects2= [];
gdjs.New_32sceneCode.GDStatsTVObjects1= [];
gdjs.New_32sceneCode.GDStatsTVObjects2= [];
gdjs.New_32sceneCode.GDintroObjects1= [];
gdjs.New_32sceneCode.GDintroObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDSurvivedObjects1.length = 0;
gdjs.New_32sceneCode.GDSurvivedObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDZombieObjects1.length = 0;
gdjs.New_32sceneCode.GDZombieObjects2.length = 0;
gdjs.New_32sceneCode.GDBulletObjects1.length = 0;
gdjs.New_32sceneCode.GDBulletObjects2.length = 0;
gdjs.New_32sceneCode.GDReloadObjects1.length = 0;
gdjs.New_32sceneCode.GDReloadObjects2.length = 0;
gdjs.New_32sceneCode.GDPistolObjects1.length = 0;
gdjs.New_32sceneCode.GDPistolObjects2.length = 0;
gdjs.New_32sceneCode.GDDeadZombieObjects1.length = 0;
gdjs.New_32sceneCode.GDDeadZombieObjects2.length = 0;
gdjs.New_32sceneCode.GDShieldObjects1.length = 0;
gdjs.New_32sceneCode.GDShieldObjects2.length = 0;
gdjs.New_32sceneCode.GDFlameWerferObjects1.length = 0;
gdjs.New_32sceneCode.GDFlameWerferObjects2.length = 0;
gdjs.New_32sceneCode.GDFlameObjects1.length = 0;
gdjs.New_32sceneCode.GDFlameObjects2.length = 0;
gdjs.New_32sceneCode.GDStatsObjects1.length = 0;
gdjs.New_32sceneCode.GDStatsObjects2.length = 0;
gdjs.New_32sceneCode.GDFuelObjects1.length = 0;
gdjs.New_32sceneCode.GDFuelObjects2.length = 0;
gdjs.New_32sceneCode.GDAmmoObjects1.length = 0;
gdjs.New_32sceneCode.GDAmmoObjects2.length = 0;
gdjs.New_32sceneCode.GDFuelBarObjects1.length = 0;
gdjs.New_32sceneCode.GDFuelBarObjects2.length = 0;
gdjs.New_32sceneCode.GDAmmoBarObjects1.length = 0;
gdjs.New_32sceneCode.GDAmmoBarObjects2.length = 0;
gdjs.New_32sceneCode.GDCaseObjects1.length = 0;
gdjs.New_32sceneCode.GDCaseObjects2.length = 0;
gdjs.New_32sceneCode.GDLifeHeartObjects1.length = 0;
gdjs.New_32sceneCode.GDLifeHeartObjects2.length = 0;
gdjs.New_32sceneCode.GDWall2Objects1.length = 0;
gdjs.New_32sceneCode.GDWall2Objects2.length = 0;
gdjs.New_32sceneCode.GDSpawnZoneObjects1.length = 0;
gdjs.New_32sceneCode.GDSpawnZoneObjects2.length = 0;
gdjs.New_32sceneCode.GDLifeLostObjects1.length = 0;
gdjs.New_32sceneCode.GDLifeLostObjects2.length = 0;
gdjs.New_32sceneCode.GDStatsTVObjects1.length = 0;
gdjs.New_32sceneCode.GDStatsTVObjects2.length = 0;
gdjs.New_32sceneCode.GDintroObjects1.length = 0;
gdjs.New_32sceneCode.GDintroObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
