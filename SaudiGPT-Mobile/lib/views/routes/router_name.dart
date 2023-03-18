import 'package:chatgpt_hackathon/views/app_navigator.dart';
import 'package:chatgpt_hackathon/views/homePage/home_page.dart';
import 'package:chatgpt_hackathon/views/meeting/meeting_page.dart';
import 'package:chatgpt_hackathon/views/routes/binding_classes.dart';
import 'package:get/get.dart';

List<GetPage> routerApp = [
  GetPage(
    name: Routes.appNviagator,
    page: () => const AppNavigator(),
    binding: AppNavigatorBinding(),
  ),
  GetPage(
    name: Routes.homePage,
    page: () => const HomePage(),
    binding: HomepageBinding(),
  ),
  GetPage(
    name: Routes.meetingPage,
    page: () => const MeetingPage(),
    binding: HomepageBinding(),
  ),
];

class Routes {
  static String appNviagator = "/AppNviagator";
  static String homePage = "/homePage";
  static String meetingPage = "/meetingPage";
}
