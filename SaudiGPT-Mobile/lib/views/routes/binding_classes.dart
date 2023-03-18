import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:get/get.dart';

class AppNavigatorBinding extends Bindings {
  @override
  void dependencies() {
    Get.put(MainController());
  }
}

class HomepageBinding extends Bindings {
  @override
  void dependencies() {
    // TODO: implement dependencies
  }
}

class MeetingBinding extends Bindings {
  @override
  void dependencies() {}
}
