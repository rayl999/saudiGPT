import 'package:chatgpt_hackathon/models/meeting.dart';
import 'package:chatgpt_hackathon/models/task.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:permission_handler/permission_handler.dart';

class MainController extends GetxController
    with GetSingleTickerProviderStateMixin {
  RxInt pageIndex = 0.obs;

  late List<Map> taskData;
  late List<Map> meetingData;
  void changePageTo(int index) {
    pageIndex.value = index;
  }

  late TabController tabController;
  RxBool isReconding = false.obs;

  Future askMicPermission() async {
    var state = await Permission.microphone.request();
    if (state == PermissionStatus.granted) {
      print("Permission granted");
    } else {
      print("Permission denied");
    }
  }

  @override
  void onInit() {
    // TODO: need to fetch data from the server
    taskData = tempTasks;
    meetingData = tempMeetingData;

    tabController = TabController(length: 2, vsync: this);
    askMicPermission();
    super.onInit();
  }
}
