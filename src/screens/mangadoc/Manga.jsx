import React, { useState } from "react";
import styles from "./Manga.module";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Linking,
  ToastAndroid,
} from "react-native";
import Header from "../../components/header/Header";
import { mangaData } from "../../components/shared/Categoryies";
import Footer from "../../components/footer/Footer";
import { Color } from "../../misc/Colors";
import CustomToast, { showToast } from "../../components/customtoast/Customtoast";
// import * as FileSystem from "expo-file-system";
// import { shareAsync } from "expo-sharing";


const Manga = () => {
  const [isDownloadModalVisible, setDownloadModalVisible] = useState(false);
  const [selectedMangaName, setSelectedMangaName] = useState("");
  const [selectedMangaimg,setSelectedMangaimg] = useState("")

  const handleDownloadPress = (name,fileimg) => {
    setDownloadModalVisible(true);
    setSelectedMangaName(name);
    setSelectedMangaimg(fileimg)
  };

  const handleCancelDownload = () => {
    setDownloadModalVisible(false);
  };

  const handleConfirmDownload = async (mangaName, mangaimg) => {
    // try {
    //   const fileName = `${mangaName}.pdf`;
    //   const fileUri = FileSystem.documentDirectory + fileName;
  
    //   const { uri } = await FileSystem.downloadAsync(
    //     FileSystem.bundleResourceDirectory + mangaFilePath,
    //     fileUri
    //   );
  
    //   console.log("File downloaded successfully:", uri)
  
    //   setDownloadModalVisible(false);
    // } catch (error) {
    //   console.error("Error while downloading file:", error);
    // }

    ToastAndroid.showWithGravity(
        `${mangaName} Download successfully`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
       
    setDownloadModalVisible(false)
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              color: Color.TITLECOLOR,
              marginBottom: 20,
            }}
          >
            Mangas
          </Text>
          {mangaData.map((mangaItem) => (
            <View key={mangaItem.id} style={styles.card}>
              <View style={styles.contentContainer}>
                <Image source={mangaItem.image} style={styles.mangaImage} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.mangaName}>{mangaItem.name}</Text>
                  <Text numberOfLines={3} style={styles.description}>
                    {mangaItem.Description}
                  </Text>

                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => console.log("Read Manga pressed")}
                    >
                      <Text style={styles.buttonText}>Read Manga</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={()=>handleDownloadPress(mangaItem.name,mangaItem.image)}
                    >
                      <Text style={styles.buttonText}>Download</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View>
          <Footer />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isDownloadModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Are you sure you want to download {selectedMangaName}?
              </Text>
              <View style={styles.modalButtonsContainer}>
                <Pressable
                  style={styles.modalButton}
                  onPress={handleCancelDownload}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => handleConfirmDownload(selectedMangaName, selectedMangaimg)}
                >
                  <Text style={styles.modalButtonText}>Download</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Manga;
