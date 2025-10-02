import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import { styles } from '../components/button/styles'; 
import { router } from 'expo-router';
import Header from '../components/header/header'

export default function FormularioInstalacao() {
  const [os, setOs] = useState('');
  const [tecnico, setTecnico] = useState('');
  const [auxiliar, setAuxiliar] = useState('');
  const [local, setLocal] = useState('');
  const [setor, setSetor] = useState('');

  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);

  return (
  
    <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ ...styles.title, color: '#000', marginBottom: 20 }}>FORMULÁRIO DE INSTALAÇÃO</Text>

      <Text>OS:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 10 }} 
                 keyboardType="numeric" value={os} onChangeText={setOs} />

      <Text>Técnico Responsável:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 10 }} 
                 value={tecnico} onChangeText={setTecnico} />

      <Text>Técnico Auxiliar:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 10 }} 
                 value={auxiliar} onChangeText={setAuxiliar} />

      <Text>Local:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 10 }} 
                 value={local} onChangeText={setLocal} />

      <Text>Setor:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 20 }} 
                 value={setor} onChangeText={setSetor} />

      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>PRÉ-INSTALAÇÃO</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <Switch value={p1} onValueChange={setP1} />
        <Text style={{ marginLeft: 8 }}>Verificar infraestrutura do local</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <Switch value={p2} onValueChange={setP2} />
        <Text style={{ marginLeft: 8 }}>Posicionar equipamento</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Switch value={p3} onValueChange={setP3} />
        <Text style={{ marginLeft: 8 }}>Conectar cabos e ligar equipamento</Text>
      </View>

    
      <TouchableOpacity style={styles.button} onPress={() => router.push('/forms')}>
        <Text style={styles.title}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/forms')}>
        <Text style={styles.title}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
